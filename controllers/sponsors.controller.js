import { query } from "express"
import { sponsorsQueries } from "../sql/sponsors.queries.js"
import { request, response } from 'express';


class sponsorsQueries {

    /**Para meter sponsors */

    async store(request, response) {
        const sponsor = request.body;
        const query = await sponsorsQueries.store(sponsor);

        if (query.ok) {
            response.status(201).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }
        
    }

    /**para buscar advisor por ID */
    async findSponsor(request, response) {
        const id = request.id;
        const query = await sponsorsQueries.findSponsor(id);

        if (query.ok) {
            response.status(200).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }
        
    }

    /**Para actualizar un sponsor */
    async updateSponsor(request, response) {
        const id = request.id;
        const sponsor = request.body;
        const query = await sponsorsQueries.updateSponsor(id, sponsor);

        if (query.ok) {
            response.status(200).json(query.message);
        } else {
            response.status(400).json({ error: query.error });
        }

    }
}

export const sponsorsQueries = new sponsorsQueries();