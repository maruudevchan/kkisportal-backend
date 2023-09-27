import { query } from "express"
import { statusQueries } from "../sql/status.queries.js"
import { request, response } from 'express';

class statusController {

    /**Para meter status */

    async store(request, response) {
        const status = request.body;
        const query = await statusQueries.store(status);

        if (query.ok) {
            response.status(201).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }
       
    }

    /**para buscar un status por ID */
    async findStatus(request, response) {
        const id = request.id;
        const query = await statusQueries.findStatus(id);

        if (query.ok) {
            response.status(200).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }
        
    }

    /**Para actualizar un status */
    async updateAdvisor(request, response) {
        const id = request.id;
        const status = request.body;
        const query = await statusQueries.updateStatus(id, status);

        if (query.ok) {
            response.status(200).json(query.message);
        } else {
            response.status(400).json({ error: query.error });
        }
        
    }

}

export const statusController = new statusController();