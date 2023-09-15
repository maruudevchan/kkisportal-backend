/**
 * ?sql
 * CREATE TABLE `status` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `status` varchar(12)
);
 */

import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from '../config/database.js';

export class statusModel extends Model {}

statusModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: DataTypes.STRING(12),
        allowNull: false
    }

}, {
    sequelize: DatabaseConfig,
    tableName: 'status'
});

