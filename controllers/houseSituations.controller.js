import { HouseSituationsQueries } from "../sql/houseSituations.queries.js"
import { request, response } from 'express';


class HouseSituationsController {

    /**Para meter situaciones */

    async store(req, res) {
        const houseSituations = req.body;
        const query = await HouseSituationsQueries.store(houseSituations);

        if (query.ok) {
            return res.status(200).json(query);
        } else {
            return res.status(400).json(query);
        }
       
    }

    /**para buscar HouseSituations por ID */
    async findHouseSituations(req, res) {
        const id = req.id;
        const query = await HouseSituationsQueries.findHouseSituations(id);

        if (query.ok) {
            return res.status(200).json(query);
        } else {
            return res.status(400).json(query);
        }

    }

    /**Para actualizar un houseSituations */
    async updatehouseSituations(req, res) {
        const houseSituations = req.body;
        const query = await HouseSituationsQueries.updatehouseSituations(houseSituations);

        if (query.ok) {
            return res.status(200).json(query);
        } else {
            return res.status(400).json(query);
        }

    }


}

export const HouseSituationsController = new HouseSituationsController();