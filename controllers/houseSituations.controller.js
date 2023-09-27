import { query } from "express"
import {houseSituationsQueries} from "../sql/houseSituations.queries.js"
import { request, response } from 'express';


class HouseSituationsController {

    /**Para meter situaciones */

    async store(HouseSituation) {
        const query = await houseSituationsQueries.store(HouseSituation);

        if (query.ok) {
            return response.status(200).json(query);
        } else {
            return response.status(400).json(query);
        }
       
    }

    /**para buscar HouseSituations por ID */
    async findHouseSituations(request, response) {
        const id = request.id;
        const query = await houseSituationsQueries.findHouseSituations(id);

        if (query.ok) {
            return response.status(200).json(query);
        } else {
            return response.status(400).json(query);
        }

    }

    /**Para actualizar un houseSituations */
    async updatehouseSituations(request, response) {
        const houseSituations = request.body;
        const query = await houseSituationsQueries.updatehouseSituations(houseSituations);

        if (query.ok) {
            return response.status(200).json(query);
        } else {
            return response.status(400).json(query);
        }

    }


}

export const HouseSituationsController = new HouseSituationsController();