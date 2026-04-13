import db from "../models/index.js";
import Shop from "../models/shop.js";

export const seedShops = async () => {
    const shops = [
 
        {
            name: "Fashion Hub",
            description: "Clothing and accessories",
            contact: "info@fashionhub.com",
            status: "pending"
        },
    
    ];
    
    await Shop.bulkCreate(shops, {ignoreDuplicates: true});
    console.log("Sample shop data seeded successfully.");
};

export default seedShops;
