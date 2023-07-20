import { Model, DataTypes } from "sequelize";
import {DatabaseConfig} from "../config/database.js";

export class SurveyModel extends Model {}

SurveyModel.init({
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
    favFood: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    favColor: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    favWord: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    favSubject: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    wishWhenGraduated: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    whatExcitesMost: {  
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    person2Admire: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    EduMeaning: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    words2Sponsor: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'survey',
    timestamps: false
});
