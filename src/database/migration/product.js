import sequelize from "../../config/db.js";
import Product from "../models/product.js";

export const createProductsTable = async () => {
    try{
    await sequelize.authenticate();
    await Product.sync({ alter: true, logging: false });
}
    catch(error){
        console.log("failed to create products table");
    }
    
}
export default createProductsTable
