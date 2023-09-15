/***
 * ?sql
 * CREATE TABLE `surveys` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `idst` int,
  `question1` TEXT,
  `question2` TEXT,
  `question3` TEXT,
  `question4` TEXT,
  `question5` TEXT,
  `question6` TEXT,
  `question7` TEXT,
  `question8` TEXT,
  `question9` TEXT,
  `question10` TEXT,
  `question11` TEXT,
  `question12` TEXT,
  `question13` TEXT,
  `question14` TEXT
);
 */

import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from '../config/database.js';
import { schoolarsModel } from './schoolars.js';

export class surveysModel extends Model {}

surveysModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idst: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: schoolarsModel,
            key: 'id'
        }

    },
    question1: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    question2: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    question3: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    question4: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    question5: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    question6: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    question7: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    question8: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    question9: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    question10: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    question11: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    question12: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    question13: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
    question14: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    }

}, {
    sequelize: DatabaseConfig,
    tableName: 'surveys'
});
