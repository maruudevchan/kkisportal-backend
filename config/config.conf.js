import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import { Routes } from '../routes/routes.js';
import { Database } from './database.js';

dotenv.config();

class App {
    app = express.application;
    http = null;
    routes = new Routes();
    db = new Database();

    constructor() {
        this.initializeApp();
    }

    async initializeApp() {
        this.app = express();
        this.config();
        this.http = http.createServer(this.app);
        await this.initDatabase();
        this.routes.initRoutes(this.app);
    }

    
    
    config() {
        this.app.use(
            express.urlencoded({
                extended: true
            }));

        this.app.use(express.json());
        
        this.app.use(cors({origin: '*' }));
    }

    async initDatabase(){
        const connection = await this.db.connection();
        console.log(connection.message);
    }
}

export default new App();