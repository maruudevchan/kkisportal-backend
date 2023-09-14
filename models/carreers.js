/* sql

CREATE TABLE `carreers` (
  `id` float PRIMARY KEY AUTO_INCREMENT,
  `isCollege` BOOLEAN,
  `career` varchar(255)
);
*/

import {Model, DataTypes} from 'sequelize';
import { DatabaseConfig } from '../config/database.js';

export class carreersModel extends Model {}

carreersModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    isCollege: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    career: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    modelName: 'carreers',
    timestamps: false
});