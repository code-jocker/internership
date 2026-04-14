import express from 'express';
import { getAllShops, getShop, createShop, updateShop, deleteShop } from '../controllers/shop.js';

const shopRoutes = express.Router();

shopRoutes.get('/getAllShops', getAllShops);
shopRoutes.post('/createShop', createShop);
shopRoutes.get('/getShop/:id', getShop);
shopRoutes.put('/updateShop/:id', updateShop);
shopRoutes.delete('/deleteShop/:id', deleteShop);

export default shopRoutes;

