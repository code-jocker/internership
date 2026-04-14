import Order from "../database/models/orders.js";
import User from "../database/models/users.js";
import Product from "../database/models/product.js";

// get all orders
export const getAllOrders = async (req, res) => {
    try {
        const allOrders = await Order.findAll({
            include: [
                { model: User, as: 'user' },
                { model: Product, as: 'product' }
            ]
        });
        res.status(200).json(allOrders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// get single order
export const getOrder = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id, {
            include: [
                { model: User, as: 'user' },
                { model: Product, as: 'product' }
            ]
        });
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// create order
export const createOrder = async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json({ message: "Order created successfully", order });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// update order
export const updateOrder = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        await order.update(req.body);
        res.status(200).json({ message: "Order updated successfully", order });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// delete order
export const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        await order.destroy();
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

