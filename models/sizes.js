/**
 * ?sql
 * CREATE TABLE `sizes` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `tshirtsize` varchar(4)
);
 */

import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from '../config/database.js';

export class sizesModel extends Model {}

sizesModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tshirtsize: {
        type: DataTypes.STRING(4),
        allowNull: false
    }

}, {
    sequelize: DatabaseConfig,
    tableName: 'sizes'
});
