/**
 * ?sql
 * CREATE TABLE `seasons` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `season` varchar(6)
);
 */

import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from '../config/database.js';

export class seasonsModel extends Model {}

seasonsModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    season: {
        type: DataTypes.STRING(6),
        allowNull: false
    }

}, {
    sequelize: DatabaseConfig,
    tableName: 'seasons'
});
