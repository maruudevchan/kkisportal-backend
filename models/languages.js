/* sql
CREATE TABLE `languages` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `language` varchar(15)
);
*/

import { Model, DataTypes } from 'sequelize';
import {DatabaseConfig} from '../config/database.js';

export class languagesModel extends Model {}

languagesModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    language: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'languages',
    timestamps: false
});

