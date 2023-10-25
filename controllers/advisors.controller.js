import { query } from "express"
import { AdvisorsQueries } from "../sql/advisors.queries.js"
import { request, response } from 'express';

class advisorsController {

    /**Para meter advisors */

    async addAdvisor(req, res) {
        const advisor = req.body;

        const query = await AdvisorsQueries.store(advisor);

        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(500).json({ ok: false, error: query.error });
        }

    }

    /**para buscar advisor por ID */
    async findAdvisor(req, res) {
        const id = req.id;
        const query = await AdvisorsQueries.findAdvisor(id);

        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(500).json({ ok: false, error: query.error });
        }

    }

    /**Para actualizar un advisor */
    async updateAdvisor(req, res) {
        const advisor = req.body;
        const query = await AdvisorsQueries.update(advisor);

        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(500).json({ ok: false, error: query.error });
        }

    }

    async listAdvisors(req, res) {
        console.log('list advisors');
        const query = await AdvisorsQueries.listAdvisors();

        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(500).json({ ok: false, error: query.error });
        }

    }

}

export const AdvisorsController = new advisorsController();