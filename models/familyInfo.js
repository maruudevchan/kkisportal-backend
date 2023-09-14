/*sql
CREATE TABLE `familyInfo` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `idst` int,
  `hasInternet` BOOLEAN,
  `hasDesktopPC` BOOLEAN,
  `hasLaptop` BOOLEAN,
  `hasTablet` BOOLEAN,
  `hasPhone` BOOLEAN,
  `sharedDevices` varchar(255),
  `bycycleFrom` varchar(255),
  `FathersOcuppation` varchar(255),
  `MothersOcuppation` varchar(255),
  `houseSituation` int,
  `incomeRatio` float,
  `has2ndSchoolarship` BOOLEAN,
  `2ndSchoolarship` varchar(255),
  `attended2Therapy` BOOLEAN,
  `therapyPlace` varchar(255),
  `familyCircumstances` text,
  `gralNotes` text,
  `hasSpecSituation` BOOLEAN,
  `notesSpecSituation` text
);
*/

import { DataTypes, Model } from 'sequelize';
import {DatabaseConfig} from '../config/database.js';

export class familyInfoModel extends Model {}

familyInfoModel.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idst: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    hasInternet: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    hasDesktopPC: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    hasLaptop: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    hasTablet: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    hasPhone: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    sharedDevices: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bycycleFrom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    FathersOcuppation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    MothersOcuppation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    houseSituation: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    incomeRatio: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    has2ndSchoolarship: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    '2ndSchoolarship': {
        type: DataTypes.STRING,
        allowNull: false
    },
    attended2Therapy: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    therapyPlace: {
        type: DataTypes.STRING,
        allowNull: false
    },
    familyCircumstances: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    gralNotes: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    hasSpecSituation: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    notesSpecSituation: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    modelName: 'familyInfo',
    tableName: 'familyInfo',
    timestamps: false
});
