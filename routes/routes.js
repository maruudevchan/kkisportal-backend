//global imports
import bodyParser from 'body-parser';
import express from 'express';
//controllers
import {SchoolarsController} from '../controllers/schoolars.controller.js';
import {UsersController} from '../controllers/users.controller.js';



//middleware
// import { validateToken } from '../middlewares/accessToken.middleware.js';

export class Routes {
    initRoutes(app = express.application) {
        app.get('/', (req, res) => {
            const filePath = path.join(__dirname, 'restricted.html');
            res.status(404).sendFile(filePath);
        });

        app.route('/newStudent').post(bodyParser.json(), SchoolarsController.store);


        //para usuarios
        app.route('/login').post(bodyParser.json(), UsersController.login);
        app.route('/register').post(bodyParser.json(), UsersController.createUser);
        app.route('/findUser/:id').get(UsersController.findUserById);

    }
}
