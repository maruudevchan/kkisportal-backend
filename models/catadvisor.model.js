import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.config";

export class CatAdvisorModel extends Model {}

CatAdvisorModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    advisorName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    advisorEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    advisorPhone: {
        type: DataTypes.STRING,
        allowNull: false,   
        defaultValue: 'N/A'
    },
    generalNotes: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    advisorGender: {
        type: DataTypes.INTEGER,
        references: {
            model: 'catgender',
            key: 'id'
        },
        defaultValue: 0
    },
    advisorUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    specialSituation: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    
}, {
    sequelize: DatabaseConfig,
    tableName: 'catadvisor',
    timestamps: false
});

