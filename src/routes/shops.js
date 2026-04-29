import express from 'express';
import { getAllShops, getShop, createShop, updateShop, deleteShop } from '../controllers/shop.js';
import protect from '../middleware/auth.js';
import authorize from '../middleware/authorize.js';

const shopRoutes = express.Router();

shopRoutes.get('/getAllShops',protect,authorize("admin","seller"),getAllShops);
shopRoutes.post('/createShop',protect,authorize("admin","seller"),
  /*  #swagger.requestBody = {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["name", "contact", "status"],
              properties: {
                name:        { type: "string", example: "My Shop" },
                description: { type: "string", example: "Best shop in town" },
                contact:     { type: "string", example: "+250788000000" },
                status:      { type: "string", enum: ["active","inactive","pending"], example: "pending" }
              }
            }
          }
        }
      } */
  createShop);
shopRoutes.get('/getShop/:id',protect,authorize("admin","seller"),getShop);
shopRoutes.put('/updateShop/:id',protect,authorize("admin","seller"),updateShop);
shopRoutes.delete('/deleteShop/:id',protect,authorize("admin","seller"),deleteShop);

export default shopRoutes;

