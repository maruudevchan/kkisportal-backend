/*sql
CREATE TABLE `contacts` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `idst` int,
  `email` varchar(255),
  `phoneN` bigint,
  `ct1Name` varchar(255),
  `ct1Rel` varchar(255),
  `ct1PhN` bigint,
  `ct2Name` varchar(255),
  `ct2Rel` varchar(255),
  `ct2PhN` bigint,
  `address` varchar(255),
  `colonia` int
);
*/

import { DataTypes, Model } from 'sequelize';
import {DatabaseConfig} from '../config/database.js';
import {schoolarsModel} from './schoolars.js';

export class contactsModel extends Model {}

contactsModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idst: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: schoolarsModel,
            key: 'id'
        }

    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    phoneN: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    ct1Name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    ct1Rel: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    ct1PhN: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    ct2Name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    ct2Rel: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    ct2PhN: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    colonia: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    modelName: 'contacts'
});
