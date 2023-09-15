/**
 * ?sql
 * 
 * CREATE TABLE `sponsors` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `spName` VARCHAR(30),
  `spGroupConvOrder` VARCHAR(20),
  `spLanguage` INT,
  `spUrl` VARCHAR(50)
);
 */

import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from '../config/database.js';
import { languagesModel } from './languages.js';

export class sponsorsModel extends Model {}

sponsorsModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    spName: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    spGroupConvOrder: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    spLanguage: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: languagesModel,
            key: 'id'
        }
    },
    spUrl: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
    
}, {
    sequelize: DatabaseConfig,
    tableName: 'sponsors'
});
