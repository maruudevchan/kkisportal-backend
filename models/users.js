import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from '../config/database.js';

export class UsersModel extends Model { }

UsersModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        unique: true,
        isEmail: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    name1: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    name2: {
        type: DataTypes.STRING(25)
    },
    lname1: {
        type: DataTypes.STRING(25),
        allowNull: false
    },
    lname2: {
        type: DataTypes.STRING(25)
    },
    birthdate: {
        type: DataTypes.DATE
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    isActive:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize: DatabaseConfig,
    modelName: 'users',
    timestamps: false
});
