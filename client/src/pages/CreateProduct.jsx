import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProductRequest } from "../api/products";



function CreateProduct() {
  // Definir los estados para cada campo
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const navigate = useNavigate(); // Para redirigir después de crear un producto

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Convierte los valores de price y stock a números
    const product = {
      name,
      description,
      price: Number(price),  // Convierte a número
      stock: Number(stock),  // Convierte a número
    };
    
    try {
      await createProductRequest(product); // Enviar la solicitud de creación del producto
      navigate("/products"); // Redirigir a la lista de productos
    } catch (error) {
      console.error("Error al agregar producto", error);
    }
  };
  

  return (
    <div
      className="d-flex vh-100 justify-content-center align-items-center"
     
    >
      <div className="bg-white rounded p-4" style={{ width: "30rem" }}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-center mb-4">Agregar Producto</h2>
          <div className="mb-3">
            <label>Nombre de producto</label>
            <input
              type="text"
              placeholder="Ingresar nombre de producto"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Descripción del producto</label>
            <input
              type="text"
              placeholder="Ingresar descripción"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Precio</label>
            <input
              type="number"
              placeholder="Ingresar precio"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Stock</label>
            <input
              type="number"
              placeholder="Ingresar stock"
              className="form-control"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
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

export default CreateProduct;

