import { query } from "express"
import { schoolsQueries } from "../sql/schools.queries.js"
import { request, response } from 'express';


class schoolsController {

    /**Para meter escuelas */

    async store(request, response) {
        const school = request.body;
        const query = await schoolsQueries.store(school);

        if (query.ok) {
            response.status(201).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }
        
    }

    /**para buscar escuela por ID */
    async findSchool(request, response) {
        const id = request.id;
        const query = await schoolsQueries.findSchool(id);

        if (query.ok) {
            response.status(200).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }

    }

    /**Para actualizar una escuela */
    async updateSchool(id, school) {
        const id = request.id;
        const school = request.body;

        const query = await schoolsQueries.updateSchool(id, school);

        if (query.ok) {
            response.status(200).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }
        
    }


}