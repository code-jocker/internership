import { seedProducts } from "../database/seeds/product.js";
import { seedUsers } from "../database/seeds/users.js";
import seedShops from "../database/seeds/shop.js";
import { seedOrders } from "../database/seeds/orders.js";

const runSeeds = async () => {
    try {
        await seedUsers();
        await seedProducts();
        await seedShops();
        await seedOrders();
        console.log("All seeds data inserted successfully");
        process.exit(0);
    }
    catch (error) {
        console.error("failed to seed data", error);
        process.exit(1);
    }
};

runSeeds();
