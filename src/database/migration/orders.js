import sequelize from "../../config/db.js";
import Order from "../models/orders.js";

export const createOrdersTable = async () => {
    try {
        await sequelize.authenticate();
        await Order.sync({ alter: true, logging: false });
        console.log("Orders table created/updated successfully.");
    } catch (error) {
        console.log("Failed to create/update orders table:", error);
    }
};

export default createOrdersTable;
