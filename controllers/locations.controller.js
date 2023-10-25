import { LocationsQueries } from "../sql/locations.queries.js"
import { request, response } from 'express';

class locationsController {

    /**Para meter ciudades */

    async store(request, response) {
        const location = request.body;
        const query = await LocationsQueries.store(location);

        if (query.ok) {
            return response.status(200).json(query);
        } else {
            return response.status(400).json(query);
        }
        
        
    }

    /**para buscar ciudad por ID */
    async findLocation(request, response) {
        const id = request.id;
        const query = await LocationsQueries.findLocation(id);

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
        const query = await LocationsQueries.updateAdvisor(id, location);

        if (query.ok) {
            return response.status(200).json(query);
        } else {
            return response.status(400).json(query);
        }

    }

    /**Para listar ciudades */
    async listLocations(request, response) {
        const query = await LocationsQueries.listLocations();

        if (query.ok) {
            return response.status(200).json(query.data);
        } else {
            return response.status(400).json(query);
        }
    }

}

export const LocationsController = new locationsController();