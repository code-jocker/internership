import express from 'express';
import { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/product.js';

const productRoutes = express.Router();

productRoutes.get('/getAllProducts', getAllProducts);
productRoutes.post('/createProduct', createProduct);
productRoutes.get('/getProduct/:id', getProduct);
productRoutes.put('/updateProduct/:id', updateProduct);
productRoutes.delete('/deleteProduct/:id', deleteProduct);

export default productRoutes;

