/**
 * table checklist{
  id int PK
  idst int
  hasPaymentBill BOOLEAN 
  hasPendings TEXT
}

Ref: checklist.idst > schoolars.id
*/

import {Model, DataTypes} from 'sequelize';
import { DatabaseConfig } from '../config/database.js';
import {schoolarsModel} from './schoolars.js'

export class checklistsModel extends Model {}

checklistsModel.init({
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
    hasPaymentBill: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    hasPendings: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    modelName: 'checklist',
    timestamps: false
});