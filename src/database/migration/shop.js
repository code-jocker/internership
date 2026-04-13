import sequelize from "../../config/db.js";
import Shop from "../models/shop.js";

export const createShopsTable = async () => {
    try {
        await sequelize.authenticate();
        await Shop.sync({ alter: true, logging: false });
        console.log("Shops table created/updated successfully.");
    } catch (error) {
        console.log("Failed to create/update shops table:", error);
    }
}

export default createShopsTable;
