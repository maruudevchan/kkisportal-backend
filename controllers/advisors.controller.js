import { query } from "express"
import { advisorsQueries } from "../sql/advisors.queries.js"
import { request, response } from 'express';
import { Payload } from '../helpers/payload.js';

class advisorsController {

    /**Para meter advisors */

    async addAdvisor(request, response) {
        const advisor = request.body;

        const query = await advisorsQueries.store(advisor);

        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data });
        } else {
            return response.status(500).json({ ok: false, error: query.error });
        }

    }

    /**para buscar advisor por ID */
    async findAdvisor(request, response) {
        const id = request.id;
        const query = await advisorsQueries.findAdvisor(id);

        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data });
        } else {
            return response.status(500).json({ ok: false, error: query.error });
        }

    }

    /**Para actualizar un advisor */
    async updateAdvisor(request, response) {
        const advisor = request.body;
        const query = await advisorsQueries.update(advisor);

        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data });
        } else {
            return response.status(500).json({ ok: false, error: query.error });
        }

    }

}

export const advisorsController = new advisorsController();