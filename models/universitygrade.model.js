import { Model, DataTypes } from "sequelize";
import {DatabaseConfig} from "../config/database.js";

export class universitygradeModel extends Model {}

universitygradeModel.init({
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
    term1SeasonY: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    term1GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    eng1GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    term2SeasonY: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    term2GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    eng2GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    term3SeasonY: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    term3GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    eng3GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    term4SeasonY: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    term4GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    eng4GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    term5SeasonY: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    term5GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    eng5GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    term6SeasonY: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    term6GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    eng6GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    term7SeasonY: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    term7GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    eng7GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    term8SeasonY: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    term8GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    eng8GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    term9SeasonY: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    term9GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    eng9GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    term10SeasonY: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    term10GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    eng10GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    term11SeasonY: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    term11GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    eng11GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    term12SeasonY: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    term12GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    eng12GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    term13SeasonY: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    term13GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    eng13GPA: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    cuUniGrade: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    cuEnGrade: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    hasDeliveredGrades: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    hasPaymentBill: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    hasPendings: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    hasReport: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'universitygrade',
    timestamps: false
});

