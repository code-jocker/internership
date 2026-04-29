import express from "express";
import sequelize from "./src/config/db.js";
import userRoutes from "./src/routes/users.js";
import authRoutes from "./src/routes/auth.js";
import productRoutes from "./src/routes/products.js";
import orderRoutes from "./src/routes/orders.js";
import notificationRoutes from "./src/routes/notifications.js";
import shopRoutes from "./src/routes/shops.js";
import dotenv from "dotenv";
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import cors from 'cors';

dotenv.config();

const swaggerFile = JSON.parse(fs.readFileSync('./swagger-output.json', 'utf8'));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api", userRoutes);
app.use("/api", authRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", shopRoutes);
app.use("/api", notificationRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

sequelize.authenticate()
    .then(() => sequelize.sync())
    .then(() => {
        app.listen(PORT, () => {
            console.log("Database connected successfully💯💯💯💯💯💯💯");
                console.log(`Our server is running  at http://localhost:${PORT}`);
            // Updated to use the actual PORT variable
            console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
        });
    })
    .catch((err) => {
        console.log("Server failed to start⚠️⚠️⚠️⚠️⚠️", err);
        process.exit(1);
    });
