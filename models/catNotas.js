import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from '../config/database.js';

export class CatNotasModel extends Model {}

CatNotasModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    categoria: {
        type: DataTypes.STRING(50)
    }
}, {
    sequelize: DatabaseConfig,
    modelName: 'catNotas',
    timestamps: false
});
