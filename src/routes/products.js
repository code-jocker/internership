import express from 'express';
import { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/product.js';
import protect from '../middleware/auth.js';
import authorize from '../middleware/authorize.js';

const productRoutes = express.Router();

productRoutes.get('/getAllProducts',protect,authorize("admin","seller","customer"), getAllProducts);
productRoutes.post('/createProduct',protect,authorize("admin","seller"),
  /*  #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["name", "size", "price", "type", "status"],
              properties: {
                name:        { type: "string",  example: "T-Shirt" },
                size:        { type: "string",  example: "M" },
                price:       { type: "number",  example: 29.99 },
                type:        { type: "string",  enum: ["male","female","unisex"], example: "unisex" },
                description: { type: "string",  example: "A nice shirt" },
                status:      { type: "string",  enum: ["available","unvailable"], example: "available" }
              }
            }
          }
        }
      } */
  createProduct);
productRoutes.get('/getProduct/:id',protect,authorize("admin","seller","customer"),getProduct);
productRoutes.put('/updateProduct/:id',protect,authorize("admin","seller"), updateProduct);
productRoutes.delete('/deleteProduct/:id',protect,authorize("admin","seller"),deleteProduct);

export default productRoutes;

