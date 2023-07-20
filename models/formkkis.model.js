import { Model, DataTypes } from "sequelize";
import {DatabaseConfig} from "../config/database.js";

export class formKKIS extends Model {}

formKKIS.init({
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
    transpersonal: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    initialM: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    SignedContract: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'formkkis',
    timestamps: false
});
