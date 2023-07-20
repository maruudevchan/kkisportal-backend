import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.config";

export class CatLanguageModel extends Model {}

CatLanguageModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'catlanguage',
    timestamps: false
});