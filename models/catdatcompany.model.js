import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.config";

export class CatDatCompanyModel extends Model {}

CatDatCompanyModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'catdatcompany',
    timestamps: false
});

