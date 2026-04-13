import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.js';
import { Model } from 'sequelize';

class Product extends Model {}

Product.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

     size: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    type:{
        type: DataTypes.ENUM("male","female","unisex"),        
        allowNull:false,
        defaultValue:"male",

    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },

    image: {
    type: DataTypes.BLOB,
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM("available","unvailable"),
        allowNull: false,
     
    },
    
}, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: true
});

export default Product;
