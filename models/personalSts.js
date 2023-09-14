/* sql
CREATE TABLE `personalSts` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `idst` int,
  `nickname` varchar(255),
  `birthdate` date,
  `gender` int,
  `fatherName` varchar(255),
  `motherName` varchar(255),
  `sizeTshirt` int,
  `isWorking` BOOLEAN,
  `placeWork` varchar(255),
  `attended2Initial` BOOLEAN,
  `SignedContract` BOOLEAN,
  `picture` BOOLEAN
);
*/

import { Model, DataTypes } from 'sequelize';
import {DatabaseConfig} from '../config/database.js';
import {schoolarsModel} from './schoolars.js';
export class personalStsModel extends Model {}

personalStsModel.init({
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
    nickname: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    gender: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'genders',
            key: 'id'
        }
    },
    fatherName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    motherName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    sizeTshirt: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tshirts',
            key: 'id'
        }
    },
    isWorking: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    placeWork: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    attended2Initial: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    SignedContract: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    picture: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    modelName: 'personalSts',
    tableName: 'personalSts',
    timestamps: false
});
