import { Model, DataTypes } from "sequelize";
import {DatabaseConfig} from "../config/database.js";

export class UserModel extends Model {}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    pwd: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isOnline : {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    
},
    {
        sequelize: DatabaseConfig,
        tableName: 'users',
        timestamps: false
    }
);

// {
//     "username":"maruudevchan",
//     "password":"1234",
//     "name":"Gloria Espinoza",
//     
// }