//global imports
import bodyParser from 'body-parser';
import express from 'express';
//controllers
import {SchoolarsController} from '../controllers/schoolars.controller.js';

//middleware
// import { validateToken } from '../middlewares/accessToken.middleware.js';

export class Routes {
    initRoutes(app = express.application) {
        app.get('/', (req, res) => {
            const filePath = path.join(__dirname, 'restricted.html');
            res.status(404).sendFile(filePath);
        });

        app.route('/newStudent').post(bodyParser.json(), SchoolarsController.store);
    }
}
