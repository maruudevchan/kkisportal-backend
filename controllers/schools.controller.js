import { SchoolsQueries } from "../sql/schools.queries.js"
import { request, response } from 'express';


class schoolsController {

    /**Para meter escuelas */

    async store(request, response) {
        const school = request.body;
        const query = await SchoolsQueries.store(school);

        if (query.ok) {
            response.status(201).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }
        
    }

    /**para buscar escuela por ID */
    async findSchool(request, response) {
        const id = request.id;
        const query = await SchoolsQueries.findSchool(id);

        if (query.ok) {
            response.status(200).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }

    }

    /**Para actualizar una escuela */
    async updateSchool(request, response) {
        const id = request.id;
        const school = request.body;

        const query = await SchoolsQueries.updateSchool(id, school);

        if (query.ok) {
            response.status(200).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }
        
    }

    //para traer las escuelas en orden alfabético con cierta estructura
    async orderedListSchools(request, response) {
        const query = await SchoolsQueries.orderedListSchools();

        if (query.ok) {
            response.status(200).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }
        
    }


}

export const SchoolsController = new schoolsController();