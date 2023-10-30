import { SeasonsQueries } from "../sql/seasons.queries.js"
import { request, response } from 'express';

class seasonsController {

    /**para buscar season por ID */
    async findSeason(request, response) {
        const id = request.id;
        const query = await SeasonsQueries.findSeason(id);

        if (query.ok) {
            response.status(200).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }
       
    }

    /**seasons enlistados */
    async listSeasons(request, response) {
        const query = await SeasonsQueries.listSeasons();
        if (query) {
            console.log('query: ', query.data);
            response.status(200).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }
    }


}

export const SeasonsController = new seasonsController();