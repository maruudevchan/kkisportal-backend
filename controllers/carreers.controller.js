import { query } from "express"
import { carreersQueries } from "../sql/carreers.queries.js"
import { request, response } from 'express';
import { Payload } from '../helpers/payload.js';

class carreersController {

    /**Para meter carreers */

    async addCarreer(request, response) {
        const addCarreer = request.body;

        const query = await carreersQueries.store(carreer);

        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data });
        } else {
            return response.status(500).json({ ok: false, error: query.error });
        }

    }

    /**para buscar carreer por ID */
    async findcarreer(request, response) {
        const id = request.id;
        const query = await carreersQueries.findCarreer(id);

        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data });
        } else {
            return response.status(500).json({ ok: false, error: query.error });
        }

    }

    /**Para actualizar un carreer */
    async updateCarreer(request, response) {
        const carreer = request.body;
        const query = await carreersQueries.updateCarreer(carreer);

        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data });
        } else {
            return response.status(500).json({ ok: false, error: query.error });
        }

    }

}

export const carreersController = new carreersController();