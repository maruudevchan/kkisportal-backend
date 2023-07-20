import { Model, DataTypes } from "sequelize";
import { DatabaseConfig } from "../config/database.config";

export class CatSchoolarInfoModel extends Model {}

CatSchoolarInfoModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idst: {
        type: DataTypes.INTEGER,
        references: {
            model: 'catschoolar',
            key: 'id'
        },
        defaultValue: 0
    },
    yearjoined: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    seasonentered: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        references: {
            model: 'catseason',
            key: 'id'
        },
    },
    graduationyear: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    graduationseason: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        references: {
            model: 'catseason',
            key: 'id'
        },
    },
    career: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    junhighfrom: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    isInPractices: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    isInSocialS: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        references: {
            model: 'catstatus',
            key: 'id'
        },
    },
    yDroppedOut: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    currentYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    currentTerm: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    session: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        references: {
            model: 'catsession',
            key: 'id'
        },
    },
    availability: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'N/A'
    },
    maluNotes: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: 'N/A'
    },
}, {
    sequelize: DatabaseConfig,
    tableName: 'catschoolarinfo',
    timestamps: false
});


