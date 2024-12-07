import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getClientRequest, updateClientRequest } from "../api/clients";  // Asegúrate de tener los endpoints correctos

const UpdateClient = () => {
  const { id } = useParams(); // ID del cliente desde la URL
  const navigate = useNavigate();

  const [client, setClient] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(true); // Estado para saber si está cargando
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchClient = async () => {
      try {
        setLoading(true); // Inicia carga
        const response = await getClientRequest(id); // Obtén datos del cliente
        setClient(response); // Actualiza estado del cliente
      } catch (err) {
        console.error("Error al obtener el cliente:", err);
        setError("Cliente no encontrado o error al cargar datos."); // Guarda el mensaje de error
      } finally {
        setLoading(false); // Finaliza carga
      }
    };

    if (id) fetchClient();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setClient((prevClient) => ({
      ...prevClient,
      [name]: value, // Actualiza el estado del cliente
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación de datos
    if (!client.name || !client.email || !client.phone || !client.address) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }

    try {
      // Actualiza el cliente en la API
      await updateClientRequest({ ...client, _id: id }); // Asegura que incluimos el ID
      alert("Cliente actualizado correctamente.");
      navigate("/clients"); // Redirige después de guardar
    } catch (error) {
      console.error("Error al actualizar cliente:", error);
      alert("No se pudo actualizar el cliente.");
    }
  };

  // Renderiza mientras carga o si hay error
  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Editar Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            value={client.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            value={client.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Teléfono</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="form-control"
            value={client.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Dirección</label>
          <input
            type="text"
            name="address"
            id="address"
            className="form-control"
            value={client.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn px-5"        
                           style={{
                          backgroundColor: "#73816E",
                          color: "white",
                          padding: "0.5rem 1rem",
                          borderRadius: "5px",
                          textDecoration: "none",
                        }}>Guardar cambios</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateClient;
