/*sql

CREATE TABLE `houseSituation` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `situation` varchar(255)
);

*/

import { DataTypes, Model } from 'sequelize';
import {DatabaseConfig} from '../config/database.js';

export class houseSituationsModel extends Model {}

houseSituationsModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    situation: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    modelName: 'houseSituationsModel',
    tableName: 'houseSituation',
    timestamps: false
});
