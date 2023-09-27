import { query } from "express"
import { sponsorsSchoolarsQueries } from "../sql/sponsorsSchoolars.queries.js"
import { request, response } from 'express';

class sponsorsSchoolarsController {

    /**Para registrar un becado de tal sponsor */

    async store(request, response) {
        const schoolarSponsor = request.body;
        const query = await sponsorsSchoolarsQueries.store(schoolarSponsor);

        if (query.ok) {
            return response.status(200).json(query);
        } else {
            return response.status(500).json(query);
        } 
        
    }

    /**para buscar quién patrocina al becado */
    async findSponsor(request, response) {
        const idst = request.idst;
        const query = await sponsorsSchoolarsQueries.findSponsor(idst);

        if (query.ok) {
            return response.status(200).json(query);
        } else {
            return response.status(500).json(query);
        }

    }

    /**para buscar todos los becados patrocinados por sponsor */

    async findSchoolars(request, response) {
        const idsp = request.idsp;
        const query = await sponsorsSchoolarsQueries.findSchoolars(idsp);

        if (query.ok) {
            return response.status(200).json(query);
        } else {
            return response.status(500).json(query);
        }

    }



    /**Para actualizar quién patrocina al becado */
    async updateSponsor(request, response) {
        const idst = request.idst;
        const sponsor = request.sponsor;
        const query = await sponsorsSchoolarsQueries.updateSponsor(idst, idsp);

        if (query.ok) {
            return response.status(200).json(query);
        } else {
            return response.status(500).json(query);
        }

    }


}