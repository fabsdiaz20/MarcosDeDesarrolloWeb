import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProviderRequest } from "../api/providers";  // Asegúrate de importar correctamente

function CreateProvider() {
  const [formData, setFormData] = useState({
    name: "",
    ruc: "",
    phone: "",
    email: "",
    address: "",
  });
  const [error, setError] = useState("");  // Estado para manejar errores
  const navigate = useNavigate(); // Para redirigir después de crear el proveedor

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!formData.name || !formData.ruc || !formData.email) {
      setError("El nombre, el RUC y el correo electrónico son obligatorios.");
      return;
    }

    try {
      await createProviderRequest(formData); // Llamada para crear el proveedor
      navigate("/providers"); // Redirigir a la lista de proveedores
    } catch (error) {
      console.error("Error al agregar proveedor", error);
      setError("Hubo un error al agregar el proveedor.");
    }
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="bg-white rounded p-4" style={{ width: "30rem" }}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">Agregar Proveedor</h2>
          {error && <div className="alert alert-danger mb-3">{error}</div>} {/* Mostrar mensaje de error */}

          <div className="mb-3">
            <label>Nombre del proveedor</label>
            <input
              type="text"
              name="name"
              placeholder="Ingresar nombre del proveedor"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>RUC</label>
            <input
              type="text"
              name="ruc"
              placeholder="Ingresar RUC (11 dígitos)"
              className="form-control"
              value={formData.ruc}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Ingresar correo electrónico"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Teléfono</label>
            <input
              type="text"
              name="phone"
              placeholder="Ingresar teléfono (9 dígitos)"
              className="form-control"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          {/* Campo de dirección */}
          <div className="mb-3">
            <label>Dirección</label>
            <input
              type="text"
              name="address"
              placeholder="Ingresar dirección"
              className="form-control"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: "#73816E",
              color: "white",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
          >
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProvider;
