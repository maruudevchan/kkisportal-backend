import { Sequelize } from "sequelize";
import dontenv from 'dotenv';

dontenv.config();

export const DatabaseConfig = new Sequelize(
    {
        
        username: 'root',
        password: null,
        database: 'chat',
        host: '127.0.0.1',
        dialect: 'mysql',
        logging: false, /*si queremos ver consultas, pon true*/
        pool: {
            max: 5,
            min: 5,
            acquire: 60000,
            idle: 15000
        }
    });

export class Database {
    async connection() {
        try {
            await DatabaseConfig.authenticate();
            return {
                ok: true, message: 'Database connected'
            }
        } catch (error) {

            console.log(DatabaseConfig.getDatabaseName())
            return {
                ok: false, message: 'Database error'
            }
        }
    }
}

// host: process.env.DB_HOST,
        // database: 'chat',
        // username: 'root',
        // password: '',
        // dialect: process.env.DB_DIALECT,
        // timezone: '-05:00',
        // port: process.env.DB_PORT,