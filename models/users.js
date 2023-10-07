import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from '../config/database.js';

export class UsersModel extends Model { }

UsersModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(50)
    },
    password: {
        type: DataTypes.STRING(255)
    },
    name1: {
        type: DataTypes.STRING(25)
    },
    name2: {
        type: DataTypes.STRING(25)
    },
    lname1: {
        type: DataTypes.STRING(25)
    },
    lname2: {
        type: DataTypes.STRING(25)
    },
    birthdate: {
        type: DataTypes.DATE
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
