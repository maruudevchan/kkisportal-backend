/**
 * ?sql
 * CREATE TABLE `schools` (
  `id` float PRIMARY KEY AUTO_INCREMENT,
  `school` varchar(255),
  `city` varchar(255),
  `colonia` varchar(255)
);
 */

import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from '../config/database.js';

export class schoolsModel extends Model {}

schoolsModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    school: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    city: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    colonia: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'schools',
    timestamps: false
});