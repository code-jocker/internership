import db from "../models/index.js";
import Product from "../models/product.js";

export const seedProducts = async () => {
    const products = [
        {
            name: "pants",
            size: "small",
            price:"1700",
            type:"male",
            description: "Best sport pants",
            Image: "https://example.com/pants.jpg",
            status:"available",
            forshop:"123e4567-e89b-12d3-a456-426614174000",


        },
    
  
    ];
    
    await Product.bulkCreate(products, {ignoreDuplicates: true});

};
