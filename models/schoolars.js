/*sql
CREATE TABLE `schoolars` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `sponsor` int,
  `advisor` int,
  `status` float,
  `level` BOOLEAN,
  `school` float,
  `location` int,
  `name` varchar(255),
  `lastname` varchar(255),
  `carreer` float,
  `seasonJoined` int,
  `yearJoined` int,
  `graduationYear` int,
  `graduationSeason` int,
  `droppedOutYear` int,
  `academicYear` varchar(11),
  `currentYear` int,
  `currentTerm` varchar(255),
  `session` BOOLEAN,
  `schoolApplied` varchar(255),
  `jrHighOrigin` varchar(255),
  `jrHighGPA` float,
  `isPracticing` BOOLEAN,
  `isSocialServicing` BOOLEAN,
  `placeProfServ` varchar(255)
);
*/

import { Model, DataTypes } from 'sequelize';
import {DatabaseConfig} from '../config/database.js';

/**
 * *Modelos para las llaves foráneas
*/
import { sponsorsModel } from './sponsors.js';
import { advisorsModel } from './advisors.js';
import { statusModel } from './status.js';
import { schoolsModel } from './schools.js';
import { locationsModel } from './locations.js';
import { carreersModel } from './carreers.js';
import { seasonsModel } from './seasons.js';

export class schoolarsModel extends Model {}

schoolarsModel.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sponsor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: sponsorsModel,
            key: 'id'
        }
    },
    advisor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: advisorsModel,
            key: 'id'
        }
    },
    status: {
        type: DataTypes.FLOAT,
        allowNull: false,
        references: {
            model: statusModel,
            key: 'id'
        }
    },
    level: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    school: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
        references: {
            model: schoolsModel,
            key: 'id',
        }
    },
    location: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: locationsModel,
            key: 'id'
        }
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    carreer: {
        type: DataTypes.FLOAT,
        allowNull: false,
        references: {
            model: carreersModel,
            key: 'id'
        }

    },
    seasonJoined: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: seasonsModel,
            key: 'id'
        }
    },
    yearJoined: {
        type: DataTypes.INTEGER,
        allowNull: false    
    },
    graduationYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    graduationSeason: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: seasonsModel,
            key: 'id'
        }
    },
    droppedOutYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    academicYear: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    currentYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    currentTerm: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    session: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    schoolApplied: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: schoolsModel,
            key: 'id'
        }
    },
    jrHighOrigin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: schoolsModel,
            key: 'id'
        }
    },
    jrHighGPA: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    isPracticing: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    isSocialServicing: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    placeProfServ: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    sequelize: DatabaseConfig,
    modelName: 'schoolars',
    tableName: 'schoolars',
    timestamps: false
});
