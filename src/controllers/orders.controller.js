import Order from "../models/order.model.js";
import { createOrderSchema } from "../schemas/order.schema.js";

// Obtener todos los pedidos
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ createdBy: req.user.id })
      .populate("client", "name email")
      .populate("products.product", "name price");
    res.json(orders);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Obtener un pedido por ID
export const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("client", "name email")
      .populate("products.product", "name price");
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Crear un pedido
export const createOrder = async (req, res) => {
  try {
    const { client, products, status, totalPrice } = req.body;
    const newOrder = new Order({
      client,
      products,
      status,
      totalPrice,
      createdBy: req.user.id,
    });
    await newOrder.save();
    res.json(newOrder);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Actualizar un pedido
export const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedOrder) return res.status(404).json({ message: "Order not found" });
    res.json(updatedOrder);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Eliminar un pedido
export const deleteOrder = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) return res.status(404).json({ message: "Order not found" });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
