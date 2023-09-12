/*sql
CREATE TABLE `collegeGrades` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `idst` int,
  `term1SeasonY` VARCHAR(10),
  `term1GPA` FLOAT,
  `eng1GPA` FLOAT,
  `term2SeasonY` VARCHAR(10),
  `term2GPA` FLOAT,
  `eng2GPA` FLOAT,
  `term3SeasonY` VARCHAR(10),
  `term3GPA` FLOAT,
  `eng3GPA` FLOAT,
  `term4SeasonY` VARCHAR(10),
  `term4GPA` FLOAT,
  `eng4GPA` FLOAT,
  `term5SeasonY` VARCHAR(10),
  `term5GPA` FLOAT,
  `eng5PA` FLOAT,
  `term6SeasonY` VARCHAR(10),
  `term6GPA` FLOAT,
  `eng6GPA` FLOAT,
  `term7SeasonY` VARCHAR(10),
  `term7GPA` FLOAT,
  `eng7GPA` FLOAT,
  `term8SeasonY` VARCHAR(10),
  `term8GPA` FLOAT,
  `eng8GPA` FLOAT,
  `term9SeasonY` VARCHAR(10),
  `term9GPA` FLOAT,
  `eng9GPA` FLOAT,
  `term10SeasonY` VARCHAR(10),
  `term10GPA` FLOAT,
  `eng10GPA` FLOAT,
  `term11SeasonY` VARCHAR(10),
  `term11GPA` FLOAT,
  `eng11GPA` FLOAT,
  `term12SeasonY` VARCHAR(10),
  `term12GPA` FLOAT,
  `eng12GPA` FLOAT,
  `term13SeasonY` VARCHAR(10),
  `term13GPA` FLOAT,
  `eng13GPA` FLOAT,
  `cuUniGrade` FLOAT,
  `cuEnGrade` FLOAT,
  `hasDeliveredGrades` BOOLEAN,
  `hasPaymentBill` BOOLEAN,
  `hasPendings` BOOLEAN,
  `hasReport` BOOLEAN
);
*/

import {Model, DataTypes} from 'sequelize';
import { DatabaseConfig } from '../config/database.js';

export class collegeGradeModel extends Model {}

collegeGradeModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idst: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: studentModel,
            key: 'id'
        }
    },
    term1SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term1GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng1GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    term2SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term2GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng2GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    term3SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term3GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng3GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    term4SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term4GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng4GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    term5SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term5GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng5PA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    term6SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term6GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng6GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    term7SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term7GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng7GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    term8SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term8GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng8GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    term9SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term9GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng9GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    term10SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term10GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng10GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    term11SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term11GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng11GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    term12SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term12GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng12GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    term13SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term13GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng13GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    cuUniGrade: {
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
    },
    hasReport: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    modelName: 'collegeGrades',
    timestamps: false
});
