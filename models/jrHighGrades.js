/*sql
CREATE TABLE `jrHighGrades` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `idst` int,
  `sem1SeasonY` VARCHAR(10),
  `sem1GPA` FLOAT,
  `enG1PA` FLOAT,
  `sem2GPA` FLOAT,
  `enG2PA` FLOAT,
  `sem3GPA` FLOAT,
  `enG3PA` FLOAT,
  `sem4GPA` FLOAT,
  `enG4PA` FLOAT,
  `sem5GPA` FLOAT,
  `enG5PA` FLOAT,
  `sem6GPA` FLOAT,
  `enG6PA` FLOAT,
  `cuHighGrade` FLOAT,
  `cuEnGrade` FLOAT,
  `hasDeliveredGrades` BOOLEAN,
  `hasPaymentBill` BOOLEAN,
  `hasPendings` BOOLEAN
);
*/

import { DataTypes, Model } from 'sequelize';
import {DatabaseConfig} from '../config/database.js';

export class jrHighGradesModel extends Model {}

jrHighGradesModel.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idst: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sem1SeasonY: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sem1GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    enG1PA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    sem2GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    enG2PA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    sem3GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    enG3PA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    sem4GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    enG4PA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    sem5GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    enG5PA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    sem6GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    enG6PA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    cuHighGrade: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    cuEnGrade: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hasDeliveredGrades: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    hasPaymentBill: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    hasPendings: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    modelName: 'jrHighGradesModel',
    tableName: 'jrHighGrades',
    timestamps: false
});
