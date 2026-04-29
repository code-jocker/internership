import express from 'express';
import { getMyNotifications, getAllNotifications, markAsRead, markAllAsRead } from '../controllers/notification.js';
import protect from '../middleware/auth.js';
import authorize from '../middleware/authorize.js';

const notificationRoutes = express.Router();

notificationRoutes.get('/notifications/my', protect, getMyNotifications);
notificationRoutes.get('/notifications/all', protect, authorize('admin', 'seller'), getAllNotifications);
notificationRoutes.get('/getNotifications', protect, authorize('admin', 'seller'), getAllNotifications);
notificationRoutes.patch('/notifications/:id/read', protect, markAsRead);
notificationRoutes.patch('/markNotificationRead/:id', protect, markAsRead);
notificationRoutes.patch('/notifications/read-all', protect, markAllAsRead);

export default notificationRoutes;
