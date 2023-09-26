import { query } from "express"
import { catNotasQueries } from "../sql/catNotas.queries.js"
import { request, response } from 'express';
import { Payload } from '../helpers/payload.js';

class catNotasController {

    /**Para meter notas */

    async addNota(request, response) {
        const nota = request.body;

        const query = await catNotasQueries.store(nota);

        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data });
        } else {
            return response.status(500).json({ ok: false, error: query.error });
        }

    }

    /**para buscar notas por ID */
    async findNotas(request, response) {
        const idst = request.id;
        const query = await catNotasQueries.findNotas(idst);

        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data });
        } else {
            return response.status(500).json({ ok: false, error: query.error });
        }

    }

    /**Para actualizar una nota */
    async updateNotas(request, response) {
        const idst = request.body.idst;
        const catNotas = request.body;
        const query = await catNotasQueries.updateNotas(idst, catNotas);

        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data });
        } else {
            return response.status(500).json({ ok: false, error: query.error });
        }

    }

}

export const catNotasController = new catNotasController();