import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';
import { Model } from 'sequelize';

class Shop extends Model {}

Shop.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    contact: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM("active", "inactive", "pending"),
        allowNull: false,
        defaultValue: "pending"
    }
}, {
    sequelize,
    modelName: 'Shop',
    tableName: 'shops',
    timestamps: true
});

export default Shop;
