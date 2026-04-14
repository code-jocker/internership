
import express from "express";
import sequelize from "./src/config/db.js";
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

import userRoutes from "./src/routes/users.js";
import productRoutes from "./src/routes/products.js";
import orderRoutes from "./src/routes/orders.js";
import shopRoutes from "./src/routes/shops.js";

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/shops', shopRoutes);

sequelize.authenticate().then(()=>sequelize.sync())
.then(()=>{
    app.listen(PORT,()=>{
        console.log("Database connect successfully 🔥🔥🔥🔥🔥🔥🔥🔥🔥" );
        console.log(`Our server is running on http://localhost:${PORT} `);
    });
})
.catch((err)=>{
    console.log("Server failed to start",err)
    process.exit(1);
}
);

