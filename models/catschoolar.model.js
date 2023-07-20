import { Model, DataTypes } from "sequelize";
import {DatabaseConfig} from "../config/database.js";

export class catSchoolarModel extends Model {}

catSchoolarModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idst: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    stName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    stLastName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    stBirthDay: {
        type: DataTypes.int,
        allowNull: false,
        defaultValue: 0
    },
    stBirthMonth: {
        type: DataTypes.int,
        allowNull: false,
        defaultValue: 0
    },
    stBirthYear: {
        type: DataTypes.int,
        allowNull: false,
        defaultValue: 0
    },
    stGender: {
        type: DataTypes.INTEGER,
        references: {
            model: 'catgender',
            key: 'id'
        },
        defaultValue: 0
    },
    stDataphone: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    stDatCompany: {
        type: DataTypes.int,
        allowNull: false,
        defaultValue: 0,
        references: {
            model: 'catcompany',
            key: 'id'
        },
    },
    stEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    stContName1: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    stContPhone1: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    stContRelation1: {
        type: DataTypes.int,
        allowNull: false,
        defaultValue: 0,
        references: {
            model: 'catrelation',
            key: 'id'
        },
    },
    stContName2: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    stContPhone2: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    stContRelation2: {
        type: DataTypes.int,
        allowNull: false,
        defaultValue: 0,
        references: {
            model: 'catrelation',
            key: 'id'
        },
    },
    stAdress: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    stColonia: {
        type: DataTypes.INTEGER,
        references: {
            model: 'catcolonia',
            key: 'id'
        },
        defaultValue: 0
    },
    stShirtSize: {
        type: DataTypes.INTEGER,
        references: {
            model: 'catshirtsize',
            key: 'id'
        },
        defaultValue: 0
    },
    stWorkPlace: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    idSocioeconomic: {
        type: DataTypes.INTEGER,
        references: {
            model: 'catsocioeconomic',
            key: 'id'
        },
        defaultValue: 0
    },
    idAdvisor: {
        type: DataTypes.INTEGER,
        references: {
            model: 'catadvisor',
            key: 'id'
        },
        defaultValue: 0
    }
}, {
    sequelize: DatabaseConfig,
    tableName: 'catschoolar',
    timestamps: false
});
