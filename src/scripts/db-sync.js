import sequelize from "../config/db.js";
import { createUsersTable } from "../database/migration/users.js";
import createProductsTable from "../database/migration/product.js";
import createShopsTable from "../database/migration/shop.js";
import createOrdersTable from "../database/migration/orders.js";
 
const syncDatabase = async () => {
  try {
        console.log("Syncing database...");
        await sequelize.authenticate();
        console.log(" our database Connected successfull successful.");

await createProductsTable();
await createUsersTable();
await createShopsTable();
await createOrdersTable();
      await sequelize.sync({ logging: false });
      console.log("Database synced successfully.");
      process.exit(0);
    }
     catch (error) {
      console.error("Error syncing database:", error);
      process.exit(1);
    }
  };
 

syncDatabase();
