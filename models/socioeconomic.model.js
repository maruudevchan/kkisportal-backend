import { Model, DataTypes } from "sequelize";
import {DatabaseConfig} from "../config/database.js";

export class socioeconomic extends Model {}

socioeconomic.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idst: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        unique: true,
    },
    fatherName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    fatherOccupation: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    motherName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    motherOccupation: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    familyCircunstances: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    incomeRatio: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    sharedDevice: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    secondSchoolarship: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    ownHouse: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    payRent: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    infonavitMortgage: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    internet: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    desktopPC: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    laptop: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    tablet: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    smartphone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'socioeconomic',
    timestamps: false
});
