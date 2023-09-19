

import { advisorsQueries } from "../sql/advisors.queries.js";
import { request, response } from 'express';


class advisorsController {

    async storeAdvisor(req, res) {
        const advisor = req.body;
        const query = await advisorsQueries.storeAdvisor(advisor);

        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data })
        } else {
            return res.status(500).json({ ok: false, error: query.error });
        }
    }

    async updateAdvisor(req, res) {
        const id = req.id;
        const advisor = req.advisor;
        const query = await advisorsQueries.updateAdvisor(id, advisor);

        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data })
        } else {
            return res.status(500).json({ ok: false, error: query.error });
        }
    }
}