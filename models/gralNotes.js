import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from '../config/database.js';
import { schoolarsModel } from './schoolars.js';
import { CatNotasModel } from './catNotas.js';
import { UsersModel } from './users.js';

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
            model: CatNotasModel,
            key: 'id'
        }
    },
    nota: {
        type: DataTypes.TEXT
    },
    whoDid: {
        type: DataTypes.INTEGER,
        references: {
            model: UsersModel,
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
