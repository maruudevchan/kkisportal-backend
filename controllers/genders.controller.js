import { query } from "express"
import { gendersQueries } from "../sql/genders.queries.js"
import { request, response } from 'express';
class gendersQueries {

    /**Para meter géneros */

    async store(request, response) {
        const gender = request.body;

        const query = await gendersQueries.store(gender);

        if (query.ok) {
            return response.status(201).json(query.data);
        }else {
            return response.status(400).json(query.error);
        }
        

    }

    /**para buscar gender */
    async findGender(request, response) {
        const id = request.params.id;

        const query = await gendersQueries.findGender(id);

        if (query.ok) {
            return response.status(200).json(query.data);
        }else{
            return response.status(400).json(query.error);
        }

    }

    /**Para actualizar la info de un género */
    async updateGender(request, response) {

        const id = request.params.id;
        const gender = request.body;

        const query = gendersQueries.updateGender(id, gender)

        if (query.ok) {
            return response.status(200).json(query.message);
        }else{
            return response.status(400).json(query.error);
        }

    }


}

export const gendersQueries = new gendersQueries();