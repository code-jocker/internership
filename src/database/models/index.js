import { Sequelize } from "sequelize";
import User from "./users.js";
import Product from "./product.js";
import Shop from "./shop.js";
import Order from "./orders.js";
import "./associations.js";

const db={
    Sequelize,
    User,
    Product,
    Shop,
    Order
};
    

export default db;
