/*sql
CREATE TABLE `genders` (
  `id` integer PRIMARY KEY,
  `gender` varchar(50),
  `objPronoun` varchar(50),
  `subjPronoun` varchar(50)
);
*/

import { DataTypes, Model } from 'sequelize';
import {DatabaseConfig} from '../config/database.js';

export class gendersModel extends Model {}

gendersModel.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    objPronoun: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subjPronoun: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    modelName: 'gendersModel',
    tableName: 'genders',
    timestamps: false
});