import { Model, DataTypes } from "sequelize";
import {DatabaseConfig} from "../config/database.js";

export class CatSessionModel extends Model {}

CatSessionModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    turno: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'catsession',
    timestamps: false
});
