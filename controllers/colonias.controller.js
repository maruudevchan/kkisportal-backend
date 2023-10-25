import { ColoniasQueries } from "../sql/colonias.queries.js"
import { request, response } from 'express';

class coloniasController {

    /**Para meter colonias */

    async store(req, res) {
        const colonia = req.body;

        const query = await ColoniasQueries.store(colonia);

        if (query.ok) {
            return res.status(201).json(query.data);
        } else {
            return res.status(400).json(query.error);
        }

    }

    /**para buscar colonia por ID */
    async findColonia(req, res) {
        const id = req.params.id;

        const query = await ColoniasQueries.findColonia(id);

        if (query.ok) {
            return res.status(200).json(query.data);
        } else {
            return res.status(400).json(query.error);
        }

    }

    /**Para actualizar un colonia */
    async updateColonia(req, res) {

        const id = req.params.id;
        const colonia = req.body;

        const query = await ColoniasQueries.updateColonia(id, colonia);

        if (query.ok) {
            return res.status(200).json(query.message);
        } else {
            return res.status(400).json(query.error);
        }

    }

    /**Para listar colonias */
    async listColonias(req, res) {
        const query = await ColoniasQueries.listColonias();

        if (query.ok) {
            return res.status(200).json(query.data);
        } else {
            return res.status(400).json(query.error);
        }
    }

}

export const ColoniasController = new coloniasController();