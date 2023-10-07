import { query } from "express"
import { FamilyInfoQueries } from "../sql/familyInfo.queries.js"
import { request, response } from 'express';


class familyInfoController {

    /**Para meter info de familia del schoolar */

    async store(req, res) {
        const familyInfo = req.body;

        const query = await FamilyInfoQueries.store(familyInfo);

        if (query.ok) {
            return res.status(201).json(query.data);
        } else {
            return res.status(400).json(query.error);
        }

    }

    /**para buscar famil por ID */
    async findFamilyInfoSt(req, res) {
        const id = req.params.id;

        const query = await FamilyInfoQueries.findFamilyInfoSt(id);

        if (query.ok) {
            return res.status(200).json(query.data);
        } else {
            return res.status(400).json(query.error);
        }


    }

    /**Para actualizar un familo  */
    async updateStfamilyInfo(req, res) {

        const id = req.params.id;
        const familyInfo = req.body;

        const query = await FamilyInfoQueries.updateStfamilyInfo(id, familyInfo);

        if (query.ok) {
            return res.status(200).json(query.message);
        } else {
            return res.status(400).json(query.error);
        }

    }


}

export const familyInfoController = new familyInfoController();