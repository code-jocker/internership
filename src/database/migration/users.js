import sequelize from "../../config/db.js";
import User from "../models/users.js";

 export const createUsersTable = async () => {
    await sequelize.authenticate();
    await User.sync({ alter: true,logging: false });
    console.log("Users table created successfully.");
 }