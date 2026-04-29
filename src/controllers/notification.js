import Notification from '../database/models/notification.js';
import User from '../database/models/users.js';
import Order from '../database/models/orders.js';

// Get notifications for the logged-in user
export const getMyNotifications = async (req, res) => {
    try {
        const notifications = await Notification.findAll({
            where: { userId: req.user.id },
            include: [{ model: Order, as: 'order', attributes: ['id', 'status', 'price', 'quantity'] }],
            order: [['createdAt', 'DESC']]
        });
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all notifications (admin/seller)
export const getAllNotifications = async (req, res) => {
    try {
        const notifications = await Notification.findAll({
            include: [
                { model: User, as: 'user', attributes: ['id', 'fullname', 'email'] },
                { model: Order, as: 'order', attributes: ['id', 'status', 'price', 'quantity'] }
            ],
            order: [['createdAt', 'DESC']]
        });
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mark a notification as read
export const markAsRead = async (req, res) => {
    try {
        const notification = await Notification.findByPk(req.params.id);
        if (!notification) return res.status(404).json({ message: 'Notification not found' });
        await notification.update({ isRead: true });
        res.status(200).json({ message: 'Notification marked as read', notification });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Mark all notifications as read for logged-in user
export const markAllAsRead = async (req, res) => {
    try {
        await Notification.update({ isRead: true }, { where: { userId: req.user.id, isRead: false } });
        res.status(200).json({ message: 'All notifications marked as read' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
