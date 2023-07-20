import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.config";

export class CatGenderModel extends Model {}

CatGenderModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    objpronoun: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    subjpronoun: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'catgender',
    timestamps: false
});

