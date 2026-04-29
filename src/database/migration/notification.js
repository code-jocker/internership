import sequelize from '../../config/db.js';
import { DataTypes } from 'sequelize';

const createNotificationsTable = async () => {
    const queryInterface = sequelize.getQueryInterface();
    await queryInterface.createTable('notifications', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
            references: { model: 'users', key: 'id' },
            onDelete: 'CASCADE'
        },
        orderId: {
            type: DataTypes.UUID,
            allowNull: true,
            references: { model: 'orders', key: 'id' },
            onDelete: 'SET NULL'
        },
        message: { type: DataTypes.STRING, allowNull: false },
        type: {
            type: DataTypes.ENUM('new_order', 'order_approved', 'order_cancelled'),
            allowNull: false
        },
        isRead: { type: DataTypes.BOOLEAN, defaultValue: false },
        createdAt: { type: DataTypes.DATE, allowNull: false },
        updatedAt: { type: DataTypes.DATE, allowNull: false }
    });
    console.log('notifications table created');
};

createNotificationsTable().catch(console.error).finally(() => sequelize.close());
