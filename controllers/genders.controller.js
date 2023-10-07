import { query } from "express"
import { GendersQueries } from "../sql/genders.queries.js"
import { request, response } from 'express';

class gendersController {

    /**Para meter géneros */

    async store(req, res) {
        const gender = req.body;

        const query = await GendersQueries.store(gender);

        if (query.ok) {
            return res.status(201).json(query.data);
        }else {
            return res.status(400).json(query.error);
        }
        

    }

    /**para buscar gender */
    async findGender(req, res) {
        const id = req.params.id;

        const query = await GendersQueries.findGender(id);

        if (query.ok) {
            return res.status(200).json(query.data);
        }else{
            return res.status(400).json(query.error);
        }

    }

    /**Para actualizar la info de un género */
    async updateGender(req, res) {

        const id = req.params.id;
        const gender = req.body;

        const query = GendersQueries.updateGender(id, gender)

        if (query.ok) {
            return res.status(200).json(query.message);
        }else{
            return res.status(400).json(query.error);
        }

    }


}

export const GendersController = new gendersController();