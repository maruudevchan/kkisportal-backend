import { HighSchoolGradesQueries  } from "../sql/highSchoolsGrades.queries.js"
import { request, response } from 'express';

class highSchoolGradesController {

    /**Para meter calificaciones SIN REGISTRAR */

    async store(req, res) {
        const grades = req.body;
        const query = await HighSchoolGradesQueries.store(grades);

        if (query.ok) {
            return res.status(200).json(query);
        } else {
            return res.status(400).json(query);
        }
       
    }

    /**Para actualizar calificaciones ya registradas */
    async update(req, res) {
        const grades = req.body;
        const query = await HighSchoolGradesQueries.update(grades);

        if (query.ok) {
            return res.status(200).json(query);
        } else {
            return res.status(400).json(query);
        }
    }

    //Para promediar general y para promediar inglés de cada periodo

    async averageEng(req, res ) {
        const idst = req.idst;
        const query = await HighSchoolGradesQueries.averageEng(idst);

        if (query.ok) {
            return res.status(200).json(query);
        } else {
            return res.status(400).json(query);
        }
        
    }

    async averageGral(req, res ) {
        const idst = req.idst;
        const query = await HighSchoolGradesQueries.averageGral(idst);

        if (query.ok) {
            return res.status(200).json(query);
        } else {
            return res.status(400).json(query);
        }
        
    }

}

export const HighSchoolGradesController = new highSchoolGradesController();
