import { query } from "express"
import { familyInfoQueries } from "../sql/familyInfo.queries.js"
import { request, response } from 'express';


class familyInfoController {

    /**Para meter info de familia del schoolar */

    async store(request, response) {
        const familyInfo = request.body;

        const query = await familyInfoQueries.store(familyInfo);

        if (query.ok) {
            return response.status(201).json(query.data);
        } else {
            return response.status(400).json(query.error);
        }

    }

    /**para buscar famil por ID */
    async findFamilyInfoSt(request, response) {
        const id = request.params.id;

        const query = await familyInfoQueries.findFamilyInfoSt(id);

        if (query.ok) {
            return response.status(200).json(query.data);
        } else {
            return response.status(400).json(query.error);
        }


    }

    /**Para actualizar un familo  */
    async updateStfamilyInfo(request, response) {

        const id = request.params.id;
        const familyInfo = request.body;

        const query = await familyInfoQueries.updateStfamilyInfo(id, familyInfo);

        if (query.ok) {
            return response.status(200).json(query.message);
        } else {
            return response.status(400).json(query.error);
        }

    }


}

export const familyInfoController = new familyInfoController();