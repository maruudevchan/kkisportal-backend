/*sql
-- Definición de la tabla 'jrHighGrades'
CREATE TABLE highschoolgrades (
  id INT PRIMARY KEY,
  idst INT,
  sem1SeasonY VARCHAR(10),
  sem1GPA FLOAT,
  en1GPA FLOAT,
  hasReport1 BOOLEAN,
  sem2SeasonY VARCHAR(10),
  sem2GPA FLOAT,
  en2GPA FLOAT,
  hasReport2 BOOLEAN,
  sem3SeasonY VARCHAR(10),
  sem3GPA FLOAT,
  en3GPA FLOAT,
  hasReport3 BOOLEAN,
  sem4SeasonY VARCHAR(10),
  sem4GPA FLOAT,
  en4GPA FLOAT,
  hasReport4 BOOLEAN,
  sem5SeasonY VARCHAR(10),
  sem5GPA FLOAT,
  en5GPA FLOAT,
  hasReport5 BOOLEAN,
  sem6SeasonY VARCHAR(10),
  sem6GPA FLOAT,
  en6GPA FLOAT,
  hasReport6 BOOLEAN,
  FOREIGN KEY (idst) REFERENCES schoolars(id)
);

);
*/

import { DataTypes, Model } from 'sequelize';
import {DatabaseConfig} from '../config/database.js';

export class highSchoolGradesModel extends Model {}

highSchoolGradesModel.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idst: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sem1SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    sem1GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    en1GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hasReport1: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    sem2SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    sem2GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    en2GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hasReport2: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    sem3SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    sem3GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    en3GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hasReport3: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    sem4SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    sem4GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    en4GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hasReport4: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    sem5SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    sem5GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    en5GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hasReport5: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    sem6SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    sem6GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    en6GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hasReport6: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    modelName: 'highSchoolGradesModel',
    tableName: 'highschoolGrades',
    timestamps: false
});
