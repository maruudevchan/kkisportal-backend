import { query } from "express"
import { seasonQueries } from "../sql/seasons.queries.js"
import { request, response } from 'express';

class seasonsController {

    /**para buscar season por ID */
    async findSeason(request, response) {
        const id = request.id;
        const query = await seasonsQueries.findSeason(id);

        if (query.ok) {
            response.status(200).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }
       

    }


}