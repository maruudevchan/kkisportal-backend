import { query } from "express"
import {coloniasQueries } from "../sql/colonias.queries.js"
import { http } from "http"

import { request, response } from 'express';
import { Payload } from '../helpers/payload.js';

class coloniasController {

    /**Para meter colonias */

    async store(request, response) {
        const colonia = request.body;

        const query = await coloniasQueries.store(colonia);

        if (query.ok) {
            return response.status(201).json(query.data);
        }else{
            return response.status(400).json(query.error);
        }
        
    }

    /**para buscar colonia por ID */
    async findColonia(request, response) {
        const id = request.params.id;

        const query = await coloniasQueries.findColonia(id);

        if (query.ok) {
            return response.status(200).json(query.data);
        }else{
            return response.status(400).json(query.error);
        }

    }

    /**Para actualizar un colonia */
    async updateColonia(request, response) {

        const id = request.params.id;
        const colonia = request.body;

        const query = await coloniasQueries.updateColonia(id, colonia);

        if (query.ok) {
            return response.status(200).json(query.message);
        }else{
            return response.status(400).json(query.error);
        }
       
    }


}

export const coloniasController = new coloniasController();