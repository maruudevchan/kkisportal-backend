import { query } from "express"
import { locationsQueries } from "../sql/locations.queries.js"
import { request, response } from 'express';

class locationsController {

    /**Para meter ciudades */

    async store(request, response) {
        const location = request.body;
        const query = await locationsQueries.store(location);

        if (query.ok) {
            return response.status(200).json(query);
        } else {
            return response.status(400).json(query);
        }
        
        
    }

    /**para buscar ciudad por ID */
    async findLocation(request, response) {
        const id = request.id;
        const query = await locationsQueries.findLocation(id);

        if (query.ok) {
            return response.status(200).json(query);
        } else {
            return response.status(400).json(query);
        }


    }

    /**Para actualizar una ciudad */
    async updateAdvisor(request, response) {
        const id = request.id;
        const location = request.body;
        const query = await locationsQueries.updateAdvisor(id, location);

        if (query.ok) {
            return response.status(200).json(query);
        } else {
            return response.status(400).json(query);
        }

    }


}

export const LocationsController = new locationsController();