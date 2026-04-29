import Order from "../database/models/orders.js";
import User from "../database/models/users.js";
import Product from "../database/models/product.js";
import Notification from "../database/models/notification.js";

// get all orders
export const getAllOrders = async (req, res) => {
    try {
        const allOrders = await Order.findAll({
         
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
        const order = await Order.create({
            ...req.body,
            userId: req.user.id
        });

        // Notify all admins and sellers
        const recipients = await User.findAll({ where: { type: ['admin', 'seller'] } });
        const notifications = recipients.map(u => ({
            userId: u.id,
            orderId: order.id,
            message: `New order #${order.id} has been placed. Price: ${order.price}, Qty: ${order.quantity}. Please approve or cancel.`,
            type: 'new_order'
        }));
        await Notification.bulkCreate(notifications);

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

        // Notify the customer if status changed to confirmed or cancelled
        if (req.body.status === 'confirmed' || req.body.status === 'cancelled') {
            const notifType = req.body.status === 'confirmed' ? 'order_approved' : 'order_cancelled';
            const msg = req.body.status === 'confirmed'
                ? `Your order #${order.id} has been approved.`
                : `Your order #${order.id} has been cancelled.`;
            await Notification.create({ userId: order.userId, orderId: order.id, message: msg, type: notifType });
        }

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

