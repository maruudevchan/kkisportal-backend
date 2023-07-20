import { Model, DataTypes } from "sequelize";
import {DatabaseConfig} from "../config/database.js";

export class CatSeasonModel extends Model {}

CatSeasonModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    season: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'catseason',
    timestamps: false
});
