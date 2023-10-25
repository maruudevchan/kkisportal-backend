import { CarreersQueries } from "../sql/carreers.queries.js"
import { request, response } from 'express';

class carreersController {

    /**Para meter carreers */

    async addCarreer(req, res) {
        const addCarreer = request.body;

        const query = await CarreersQueries.store(carreer);

        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data });
        } else {
            return response.status(500).json({ ok: false, error: query.error });
        }

    }

    /**para buscar carreer por ID */
    async findcarreer(req, res) {
        const id = req.id;
        const query = await CarreersQueries.findCarreer(id);

        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(500).json({ ok: false, error: query.error });
        }

    }

    /**Para actualizar un carreer */
    async updateCarreer(req, res) {
        const carreer = req.body;
        const query = await CarreersQueries.updateCarreer(carreer);

        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(500).json({ ok: false, error: query.error });
        }

    }

    /**Para listar carreers */
    async listCarreers(req, res) {
        const query = await CarreersQueries.listCarreers();

        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        }else {
            return res.status(500).json({ ok: false, error: query.error });
        }
    }

}

export const CarreersController = new carreersController();