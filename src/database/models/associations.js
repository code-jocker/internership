import User from './users.js';
import Product from './product.js';
import Order from './orders.js';
import Notification from './notification.js';

// User - Order (1:M)
User.hasMany(Order, { 
    foreignKey: 'userId', 
    as: 'orders' 
});
Order.belongsTo(User, { 
    foreignKey: 'userId', 
    as: 'user' 
});

// Product - Order (1:M)
Product.hasMany(Order, { 
    foreignKey: 'prodId', 
    as: 'orders' 
});
Order.belongsTo(Product, { 
    foreignKey: 'prodId', 
    as: 'product' 
});

// User - Notification (1:M)
User.hasMany(Notification, { foreignKey: 'userId', as: 'notifications' });
Notification.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// Order - Notification (1:M)
Order.hasMany(Notification, { foreignKey: 'orderId', as: 'notifications' });
Notification.belongsTo(Order, { foreignKey: 'orderId', as: 'order' });

