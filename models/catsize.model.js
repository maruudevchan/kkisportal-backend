import { Model, DataTypes } from "sequelize";
import {DatabaseConfig} from "../config/database.js";

export class CatSizeModel extends Model {}

CatSizeModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'catsize',
    timestamps: false
});
