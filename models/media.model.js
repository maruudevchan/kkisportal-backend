import { Model, DataTypes } from "sequelize";
import {DatabaseConfig} from "../config/database.js";

export class mediaModel extends Model {}

mediaModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idst: {
        type: DataTypes.INTEGER,
        references: {
            model: 'catschoolar',
            key: 'id'
        },
        defaultValue: 0
    },
    urlStPicWp: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    urlStHolPicWp: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    urlXmassCardWp: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'media',
    timestamps: false
});
