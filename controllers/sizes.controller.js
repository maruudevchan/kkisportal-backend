import { query } from "express"
import { sizesModel } from "../models/sizes.js"
import { request, response } from "express";

class sizesController {

    /**Para meter sizes */

    async store(request, response) {
        const size = request.body;
        const query = await sizesQueries.store(size);

        if (query.ok) {
            response.status(201).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }
        
    }

    /**para buscar size por ID */
    async findSize(request, response) {
        const id = request.id;
        const query = await sizesQueries.findSize(id);

        if (query.ok) {
            response.status(200).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }
    }

    /**Para actualizar una talla */
    async updateSize(request, response) {
        const id = request.id;
        const size = request.body;
        const query = await sizesQueries.updateSize(id, size);

        if (query.ok) {
            response.status(200).json(query.message);
        } else {
            response.status(400).json({ error: query.error });
        }
    }
}

export const sizesController = new sizesController();