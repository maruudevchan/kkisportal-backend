import { Model, DataTypes } from 'sequelize';
import { DatabaseConfig } from '../config/database.js';
import { schoolarsModel } from './schoolars.js';
import { sponsorsModel } from './sponsors.js';


export class SponsorsSchoolarsModel extends Model {}

SponsorsSchoolarsModel.init({
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
    sponsor: {
        type: DataTypes.INTEGER,
        references: {
            model: sponsorsModel,
            key: 'id'
        }
    }
}, {
    sequelize: DatabaseConfig,
    modelName: 'sponsorsSchoolars',
    timestamps: false
});
