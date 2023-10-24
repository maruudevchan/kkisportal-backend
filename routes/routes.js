//global imports
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

//controllers
import { SchoolarsController } from '../controllers/schoolars.controller.js';
import { UsersController } from '../controllers/users.controller.js';
import { ApiAssistantController } from '../controllers/apiAssistant.controller.js';
import { SponsorsController } from '../controllers/sponsors.controller.js';
import { GralNotesController } from '../controllers/gralNotes.controller.js';
import { SchoolsQueries } from '../sql/schools.queries.js';
import { SchoolsController } from '../controllers/schools.controller.js';
 
//middleware
// import { validateToken } from '../middlewares/accessToken.middleware.js';

export class Routes {


    initRoutes(app = express.application) {
        const __dirname = path.resolve();
        
        app.get('/', (req, res) => {
            console.log('path: '+__dirname+'\\routes\\restricted.html');
            res.status(404).sendFile(path.join(__dirname, '/routes/restricted.html'));
        });

        app.use(cors());

        //dashboard routes
        app.route('/data').get(ApiAssistantController.getData);
        app.route('/getSchoolars').get(ApiAssistantController.getSchoolars);
        app.route('/pendings').get(ApiAssistantController.getPendings);

        //para schoolars
        app.route('/newSchoolar').post(bodyParser.json(), SchoolarsController.store);
        app.route('/pendings').get(GralNotesController.findPendings);
        // app.route('/pendings/:id').get(GralNotesController.findPendingById);
        app.route('/schoolars').get(SchoolarsController.listSchoolars);
        
        //para escuelas
         app.route('/datalist').get(bodyParser.json(), SchoolsController.orderedListSchools);

        //para advisors
        // app.route('/newAdvisor').post(bodyParser.json(), AdvisorsController.store);

        //para sponsors
        app.route('/newSponsor').post(bodyParser.json(), SponsorsController.store);


        //para usuarios
        app.route('/login').post(bodyParser.json(), UsersController.login);
        app.route('/register').post(bodyParser.json(), UsersController.createUser);
        app.route('/findUser/:id').get(UsersController.findUserById);

    }
}
