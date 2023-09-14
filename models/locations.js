/**
 * ?sql
 CREATE TABLE `locations` (
 `id` int PRIMARY KEY AUTO_INCREMENT,
 `city` varchar(20)
);
 */

import {Model, DataTypes} from 'sequelize';
import {DatabaseConfig} from '../config/database.js';

export class locationsModel extends Model {}

locationsModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    city: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    modelName: 'locations',
    timestamps: false
});
