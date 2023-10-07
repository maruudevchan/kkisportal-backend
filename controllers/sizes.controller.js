import { SizesQueries } from "../sql/sizes.queries.js"
import { request, response } from "express";

class sizesController {

    /**Para meter sizes */

    async store(request, response) {
        const size = request.body;
        const query = await SizesQueries.store(size);

        if (query.ok) {
            response.status(201).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }
        
    }

    /**para buscar size por ID */
    async findSize(request, response) {
        const id = request.id;
        const query = await SizesQueries.findSize(id);

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
        const query = await SizesQueries.updateSize(id, size);

        if (query.ok) {
            response.status(200).json(query.message);
        } else {
            response.status(400).json({ error: query.error });
        }
    }
}

export const sizesController = new sizesController();