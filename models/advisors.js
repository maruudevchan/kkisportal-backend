/**
 * ?sql
** CREATE TABLE `advisors` (
**  `id` int PRIMARY KEY AUTO_INCREMENT,
**  `advisorUrl` VARCHAR(50),
**  `advisorName` VARCHAR(30),
**  `advisorGender` INT,
**  `advisorPhone` VARCHAR(10),
**  `advisorEmail` VARCHAR(25)
**);
*/



import {Model, DataTypes} from 'sequelize';
import { DatabaseConfig } from '../config/database.js';
import {gendersModel} from './genders.js'


export class advisorsModel extends Model {}

advisorsModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    advisorUrl: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    advisorName: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    advisorGender: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: gendersModel,
            key: 'id'
        }
    },
    advisorPhone: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    advisorEmail: {
        type: DataTypes.STRING(25),
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    modelName: 'advisors',
    timestamps: false
});

advisorsModel.belongsTo(gendersModel, {foreignKey: 'advisorGender', as: 'id'});
