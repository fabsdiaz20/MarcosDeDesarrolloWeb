import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getClientsRequest, deleteClientRequest } from "../api/clients";  // Importa las funciones de la API

function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);  // Agrega un estado para manejar la carga

  useEffect(() => {
    const fetchClients = async () => {  // Cambié el nombre de la función para evitar conflicto
      const token = localStorage.getItem("token");  // O desde donde guardes el token
      try {
        const data = await getClientsRequest(token);  // Llama a la función correcta
        setClients(data);  // Guarda los clientes en el estado
        setLoading(false);  // Cambia el estado de carga a falso
      } catch (error) {
        console.error("Error al obtener clientes:", error);
        setLoading(false);  // Cambia el estado de carga a falso, aunque haya error
      }
    };

    fetchClients();  // Llama a la función cuando el componente se monta
  }, []);  // El array vacío asegura que solo se ejecute una vez al montar el componente

  const handleDelete = async (id) => {
    try {
      await deleteClientRequest(id);  // Llama a la función de eliminación
      setClients(clients.filter((client) => client._id !== id));  // Elimina el cliente del estado
    } catch (error) {
      console.log("Error al eliminar cliente:", error);
    }
  };

  if (loading) {
    return <div>Cargando clientes...</div>;  // Muestra un mensaje mientras los clientes se están cargando
  }

  return (
    <div className="d-flex w-100 justify-content-center align-items-center">
      <div className="container py-4">
        <br />
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Lista de Clientes</h3>
          <Link
            to="/create-client"
            style={{
              backgroundColor: "#73816E",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Agregar cliente +
          </Link>
        </div>
        <div className="container py-4">
          <table className="table table-hover table-striped text-center align-middle">
            <thead className="table-success">
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Dirección</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client._id}>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>{client.address}</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <Link
                        to={`/update-client/${client._id}`}
                        style={{
                          backgroundColor: "#73816E",
                          color: "white",
                          padding: "0.5rem 1rem",
                          borderRadius: "5px",
                          textDecoration: "none",
                        }}
                      >
                        Editar
                      </Link>
                      <button
                        onClick={() => handleDelete(client._id)}
                        style={{
                          backgroundColor: "#73816E",
                          color: "white",
                          padding: "0.5rem 1rem",
                          borderRadius: "5px",
                          textDecoration: "none",
                        }}
                      >
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Clients;
