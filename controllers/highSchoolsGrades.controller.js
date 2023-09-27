import { query } from "express"
import { highSchoolGradesQueries  } from "../sql/highSchoolsGrades.queries.js"
import { request, response } from 'express';

class highSchoolGradesController {

    /**Para meter calificaciones SIN REGISTRAR */

    async store(request, response) {
        const grades = request.body;
        const query = await highSchoolGradesQueries.store(grades);

        if (query.ok) {
            return response.status(200).json(query);
        } else {
            return response.status(400).json(query);
        }
       
    }

    /**Para actualizar calificaciones ya registradas */
    async update(request, response) {
        const grades = request.body;
        const query = await highSchoolGradesQueries.update(grades);

        if (query.ok) {
            return response.status(200).json(query);
        } else {
            return response.status(400).json(query);
        }
    }

    //Para promediar general y para promediar inglés de cada periodo

    async averageEng(request, response ) {
        const idst = request.idst;
        const query = await highSchoolGradesQueries.averageEng(idst);

        if (query.ok) {
            return response.status(200).json(query);
        } else {
            return response.status(400).json(query);
        }
        
    }

    async averageGral(request, response ) {
        const idst = request.idst;
        const query = await highSchoolGradesQueries.averageGral(idst);

        if (query.ok) {
            return response.status(200).json(query);
        } else {
            return response.status(400).json(query);
        }
        
    }

}

export const highSchoolGradesController = new highSchoolGradesController();
