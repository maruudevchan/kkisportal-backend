import { Model, DataTypes } from "sequelize";
import {DatabaseConfig} from "../config/database.js";

export class CatStatusModel extends Model {}

CatStatusModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'catstatus',
    timestamps: false
});
