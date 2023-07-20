/*NOTA
Modelo para relacion uno a varios.

Lógica:
un estudiante puede tener varios patrocinadores
un patrocinador puede tener varios estudiantes
*/

import { Model, DataTypes } from "sequelize";
import {DatabaseConfig} from "../config/database.js";

export class schoolarSponsor extends Model {}

schoolarSponsor.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idSchoolar: {
        type: DataTypes.INTEGER,
        references: {
            model: 'catschoolar',
            key: 'id'
        },
        defaultValue: 0
    },
    idSponsor: {
        type: DataTypes.INTEGER,
        references: {
            model: 'catsponsor',
            key: 'id'
        },
        defaultValue: 0
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'schoolarsponsor',
    timestamps: false
});
