import db from "../models/index.js";
import Order from "../models/orders.js";

export const seedOrders = async () => {
    const orders = [
        {
            userId: "afeb9e45-99d9-439e-bd5b-271e4efa8fd8",
            prodId: "aa081cca-9090-4e5e-b721-554ecb6f48e8", 
            status: "pending",
            orderDate: "2024-10-01",
            price: 1700.00,
            quantity: 2
        },
        {
            userId: "b98df76c-3ced-4ab3-8f6a-c3b5ab07b2ab",
            prodId: "aa081cca-9090-4e5e-b721-554ecb6f48e8",
            status: "confirmed",
            orderDate: "2024-10-02",
            price: 3400.00,
            quantity: 4
        },
        {
            userId: "cba44b5f-ac0c-4c8b-9391-0a8322cf4b27",
            prodId: "aa081cca-9090-4e5e-b721-554ecb6f48e8",
            status: "shipped",
            orderDate: "2024-10-03",
            price: 850.00,
            quantity: 1
        }
    ];
    
    await Order.bulkCreate(orders, {ignoreDuplicates: true});
    console.log("Sample order data seeded successfully.");
};
