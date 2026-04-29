import express from 'express';
import { getAllOrders, getOrder, createOrder, updateOrder, deleteOrder } from '../controllers/orders.js';
import protect from '../middleware/auth.js';
import authorize from '../middleware/authorize.js';

const orderRoutes = express.Router();

orderRoutes.get('/getAllOrders',protect,authorize("admin","seller"),getAllOrders);
orderRoutes.post('/createOrder',protect,authorize("customer"), createOrder);
orderRoutes.get('/getOrder/:id',protect,authorize("admin","seller","customer"), getOrder);
orderRoutes.put('/updateOrder/:id',protect,authorize("admin","seller"), updateOrder);
orderRoutes.patch('/updateOrder/:id',protect,authorize("admin","seller"), updateOrder);
orderRoutes.delete('/deleteOrder/:id',protect,authorize("admin","seller"), deleteOrder);

export default orderRoutes;

