import { Model, DataTypes } from "sequelize";
import {DatabaseConfig} from "../config/database.js";

export class CatSponsorModel extends Model {}

CatSponsorModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    spName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    spGroupConvOrder: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    spLanguage: {
        type: DataTypes.INTEGER,
        references: {
            model: 'catlanguage',
            key: 'id'
        },
        defaultValue: 0
    },
    spUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'catsponsor',
    timestamps: false
});
