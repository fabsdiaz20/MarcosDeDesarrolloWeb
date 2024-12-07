import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getProductsRequest, deleteProductRequest } from "../api/products";  // Importa las funciones de la API

function Products() {
  const [products, setProducts] = useState([]);  // Estado para productos
  const [loading, setLoading] = useState(true);  // Estado para cargar productos

  useEffect(() => {
    const fetchProducts = async () => {
      const token = localStorage.getItem('token');  // Obtén el token desde localStorage
      if (!token) {
        console.error('Token no encontrado');
        setLoading(false);  // Si no hay token, deja de cargar
        return;
      }
    
      try {
        const data = await getProductsRequest(token);  // Usamos la función de la API
        setProducts(data);  // Actualiza el estado de productos
        setLoading(false);  // Deja de cargar
      } catch (error) {
        console.error('Error al obtener productos:', error);
        setLoading(false);  // Si hay error, también deja de cargar
      }
    };
    
    fetchProducts();
  }, []);  // Se ejecuta una sola vez cuando el componente se monta
  
  const handleDelete = async (id) => {
    try {
      await deleteProductRequest(id);  // Llama a la función de eliminación
      setProducts(products.filter((product) => product._id !== id));  // Elimina el producto del estado
    } catch (error) {
      console.log("Error al eliminar producto:", error);
    }
  };

  if (loading) {
    return <div>Cargando productos...</div>;  // Muestra un mensaje mientras los productos se están cargando
  }

  return (
    <div className="d-flex w-100 justify-content-center align-items-center">
      <div className="container py-4">
        <br />
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Lista de Productos</h3>
          <Link
            to="/create"
            style={{
              backgroundColor: "#73816E",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Agregar producto +
          </Link>
        </div>
        <div className="container py-4">
          <table className="table table-hover table-striped text-center align-middle">
            <thead className="table-success">
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <Link
                        to={`/update/${product._id}`}
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
                        onClick={() => handleDelete(product._id)}
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

export default Products;
