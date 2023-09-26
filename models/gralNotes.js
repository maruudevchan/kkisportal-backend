import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from '../config/database.js';
import { schoolarsModel } from './schoolars.js';
import { catNotasModel } from './catNotas.js';
import { usersModel } from './users.js';

export class GralNotesModel extends Model {}

GralNotesModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    idst: {
        type: DataTypes.INTEGER,
        references: {
            model: schoolarsModel,
            key: 'id'
        }
    },
    categoria: {
        type: DataTypes.INTEGER,
        references: {
            model: catNotasModel,
            key: 'id'
        }
    },
    nota: {
        type: DataTypes.TEXT
    },
    whoDid: {
        type: DataTypes.INTEGER,
        references: {
            model: usersModel,
            key: 'id'
        }
    },
    date: {
        type: DataTypes.DATE
    }
}, {
    sequelize: DatabaseConfig,
    modelName: 'gralNotes',
    timestamps: false
});
