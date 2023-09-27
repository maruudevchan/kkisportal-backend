import { query } from "express"
import { schoolarsQueries } from "../sql/schoolars.queries.js"
import { request, response } from "express"

class schoolarsController {

    /**Para meter becados */

    async store(request, response) {
        const student = request.body;
        const query = await schoolarsQueries.store(student);

        if (query.ok) {
            response.status(201).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }
        
    }

    /**para buscar schoolar por ID */
    async findSchoolar(request, response) {
        const id = request.id;
        const query = await schoolarsQueries.findSchoolar(id);

        if (query.ok) {
            response.status(200).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }
        

    }

    /**Para actualizar un estudiante */
    async updateSchoolar(request, response) {
        const id = request.id;
        const schoolar = request.body;

        const query = await schoolarsQueries.updateSchoolar(id, schoolar);

        if (query.ok) {
            response.status(200).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }

    }

}

export const schoolarsController = new schoolarsController();