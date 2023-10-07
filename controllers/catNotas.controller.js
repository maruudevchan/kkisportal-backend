import { query } from "express"
import { CatNotasQueries } from "../sql/catNotas.queries.js"
import { request, response } from 'express';
import { Payload } from '../helpers/payload.js';

class catNotasController {

    /**Para meter notas */

    async addNota(req, res) {
        const nota = req.body;

        const query = await CatNotasQueries.store(nota);

        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(500).json({ ok: false, error: query.error });
        }

    }

    /**para buscar notas por ID */
    async findNotas(req, res) {
        const idst = req.id;
        const query = await CatNotasQueries.findNotas(idst);

        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(500).json({ ok: false, error: query.error });
        }

    }

    /**Para actualizar una nota */
    async updateNotas(req, res) {
        const idst = req.body.idst;
        const catNotas = req.body;
        const query = await CatNotasQueries.updateNotas(idst, catNotas);

        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(500).json({ ok: false, error: query.error });
        }

    }

}

export const catNotasController = new catNotasController();