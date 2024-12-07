import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProvidersRequest, deleteProviderRequest } from "../api/providers";  // Importa las funciones de la API

function Providers() {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);  // Agrega un estado para manejar la carga

  useEffect(() => {
    const fetchProviders = async () => {  // Cambié el nombre de la función para evitar conflicto
      const token = localStorage.getItem("token");  // O desde donde guardes el token
      try {
        const data = await getProvidersRequest(token);  // Llama a la función correcta
        setProviders(data);  // Guarda los proveedores en el estado
        setLoading(false);  // Cambia el estado de carga a falso
      } catch (error) {
        console.error("Error al obtener proveedores:", error);
        setLoading(false);  // Cambia el estado de carga a falso, aunque haya error
      }
    };

    fetchProviders();  // Llama a la función cuando el componente se monta
  }, []);  // El array vacío asegura que solo se ejecute una vez al montar el componente

  const handleDelete = async (id) => {
    try {
      await deleteProviderRequest(id);  // Llama a la función de eliminación
      setProviders(providers.filter((provider) => provider._id !== id));  // Elimina el proveedor del estado
    } catch (error) {
      console.log("Error al eliminar proveedor:", error);
    }
  };

  if (loading) {
    return <div>Cargando proveedores...</div>;  // Muestra un mensaje mientras los proveedores se están cargando
  }

  return (
    <div className="d-flex w-100 justify-content-center align-items-center">
      <div className="container py-4">
        <br />
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Lista de Proveedores</h3>
          <Link
            to="/create-provider"
            style={{
              backgroundColor: "#73816E",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Agregar proveedor +
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
              {providers.map((provider) => (
                <tr key={provider._id}>
                  <td>{provider.name}</td>
                  <td>{provider.email}</td>
                  <td>{provider.phone}</td>
                  <td>{provider.address}</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <Link
                        to={`/update-provider/${provider._id}`}
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
                        onClick={() => handleDelete(provider._id)}
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

export default Providers;
