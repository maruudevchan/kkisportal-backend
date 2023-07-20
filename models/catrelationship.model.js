import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.config";

export class CatRelationshipModel extends Model {}

CatRelationshipModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    relationship: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'catrelationship',
    timestamps: false
});