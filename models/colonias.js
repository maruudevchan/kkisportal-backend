/*sql
CREATE TABLE `colonias` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `colonia` varchar(50)
);
*/

import { DataTypes, Model } from 'sequelize';
import {DatabaseConfig} from '../config/database.js';

export class coloniasModel extends Model {}

coloniasModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    colonia: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    modelName: 'colonias'
});
