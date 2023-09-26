/*sql
-- Definición de la tabla 'collegeGrades'
CREATE TABLE collegeGrades (
  id INT PRIMARY KEY,
  idst INT,
  term1SeasonY VARCHAR(10),
  term1GPA FLOAT,
  eng1GPA FLOAT,
  hasReport1 BOOLEAN,
  term2SeasonY VARCHAR(10),
  term2GPA FLOAT,
  eng2GPA FLOAT,
  hasReport2 BOOLEAN,
  term3SeasonY VARCHAR(10),
  term3GPA FLOAT,
  eng3GPA FLOAT,
  hasReport3 BOOLEAN,
  term4SeasonY VARCHAR(10),
  term4GPA FLOAT,
  eng4GPA FLOAT,
  hasReport4 BOOLEAN,
  term5SeasonY VARCHAR(10),
  term5GPA FLOAT,
  eng5GPA FLOAT,
  hasReport5 BOOLEAN,
  term6SeasonY VARCHAR(10),
  term6GPA FLOAT,
  eng6GPA FLOAT,
  hasReport6 BOOLEAN,
  term7SeasonY VARCHAR(10),
  term7GPA FLOAT,
  eng7GPA FLOAT,
  hasReport7 BOOLEAN,
  term8SeasonY VARCHAR(10),
  term8GPA FLOAT,
  eng8GPA FLOAT,
  hasReport8 BOOLEAN,
  term9SeasonY VARCHAR(10),
  term9GPA FLOAT,
  eng9GPA FLOAT,
  hasReport9 BOOLEAN,
  term10SeasonY VARCHAR(10),
  term10GPA FLOAT,
  eng10GPA FLOAT,
  hasReport10 BOOLEAN,
  term11SeasonY VARCHAR(10),
  term11GPA FLOAT,
  eng11GPA FLOAT,
  hasReport11 BOOLEAN,
  term12SeasonY VARCHAR(10),
  term12GPA FLOAT,
  eng12GPA FLOAT,
  hasReport12 BOOLEAN,
  term13SeasonY VARCHAR(10),
  term13GPA FLOAT,
  eng13GPA FLOAT,
  hasReport13 BOOLEAN,
  FOREIGN KEY (idst) REFERENCES schoolars(id)
);

*/

import {Model, DataTypes} from 'sequelize';
import { DatabaseConfig } from '../config/database.js';

export class collegeGradesModel extends Model {}

collegeGradesModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idst: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: studentModel,
            key: 'id'
        }
    },
    term0SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term0GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng0GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hasReport0: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    term1SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term1GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng1GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hasReport1: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    term2SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term2GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng2GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hasReport2: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    term3SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term3GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng3GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hasReport3: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    term4SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term4GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng4GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hasReport4: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    term5SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term5GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng5GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hasReport5: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    term6SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term6GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng6GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hasReport6: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    term7SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term7GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng7GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hasReport7: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    term8SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term8GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng8GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hasReport8: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    term9SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term9GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng9GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hasReport9: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    term10SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term10GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng10GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hasReport10: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    term11SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term11GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng11GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hasReport11: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    term12SeasonY: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    term12GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    eng12GPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hasReport12: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },

}, {
    sequelize: DatabaseConfig,
    modelName: 'collegeGrades',
    timestamps: false
});
