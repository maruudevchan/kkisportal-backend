import { CollegeGradesQueries } from "../sql/collegeGrades.queries.js"
import { request, response } from 'express';

class collegeGradesController {

    /**Para meter calificaciones */

    async store(req, res) {
        const grades = req.body;

        const query = await CollegeGradesQueries.store(grades);

        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(500).json({ ok: false, error: query.error });
        }

    }
        

     /**Para actualizar calificaciones ya registradas */
     async update(req, res) {
        const grades = req.body;

        const query = await CollegeGradesQueries.update(grades);

        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(500).json({ ok: false, error: query.error });
        }
        

    }

    //Para promediar general y para promediar inglés de cada periodo

    async averageGral(req, res) {
        const idst = req.body;

        const query = await CollegeGradesQueries.averageGral(idst);

        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(500).json({ ok: false, error: query.error });
        }
        
    }


    async averageEng(req, res) {
        const idst = req.body;

        const query = await CollegeGradesQueries.averageEng(idst);

        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(500).json({ ok: false, error: query.error });
        }
        
       

    }

    //verifico los reportes pendientes
    async verifyReports(req, res) {
        const idst = req.body;

        const query = await CollegeGradesQueries.verifyReports(idst);

        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(500).json({ ok: false, error: query.error });
        }
        
       

        
    }


}