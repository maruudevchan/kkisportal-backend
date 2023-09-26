import { query } from "express"
import {collegeGradesQueries} from "../sql/collegeGrades.queries.js"
import { http } from "http"
import { request, response } from 'express';
import { Payload } from '../helpers/payload.js';

class collegeGradesController {

    /**Para meter calificaciones */

    async store(request, response) {
        const grades = request.body;

        const query = await collegeGradesQueries.store(grades);

        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data });
        } else {
            return response.status(500).json({ ok: false, error: query.error });
        }

    }
        

     /**Para actualizar calificaciones ya registradas */
     async update(request, response) {
        const grades = request.body;

        const query = await collegeGradesQueries.update(grades);

        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data });
        } else {
            return response.status(500).json({ ok: false, error: query.error });
        }
        

    }

    //Para promediar general y para promediar inglés de cada periodo

    async averageGral(request, response) {
        const idst = request.body;

        const query = await collegeGradesQueries.averageGral(idst);

        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data });
        } else {
            return response.status(500).json({ ok: false, error: query.error });
        }
        
    }


    async averageEng(request, response) {
        const idst = request.body;

        const query = await collegeGradesQueries.averageEng(idst);

        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data });
        } else {
            return response.status(500).json({ ok: false, error: query.error });
        }
        
       

    }

    //verifico los reportes pendientes
    async verifyReports(request, response) {
        const idst = request.body;

        const query = await collegeGradesQueries.verifyReports(idst);

        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data });
        } else {
            return response.status(500).json({ ok: false, error: query.error });
        }
        
       

        
    }


}