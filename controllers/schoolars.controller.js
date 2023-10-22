import { SchoolarsQueries } from "../sql/schoolars.queries.js"
import { request, response } from "express"

class schoolarsController {

    /**Para meter becados */

    async store(req, res) {
        const student = req.body;
        const query = await SchoolarsQueries.store(student);

        if (query.ok) {
            res.status(201).json(query.data);
        } else {
            console.log(student);
            res.status(400).json({ error: query.error });
        }
        
    }

    /**Para buscar todos los becados */
    async listSchoolars(req,res){
        const students = await SchoolarsQueries.getSchoolars();
        return res.json(students);
    }


    /**para buscar schoolar por ID */
    async findSchoolar(req, res) {
        const id = req.id;
        const query = await SchoolarsQueries.findSchoolar(id);

        if (query.ok) {
            res.status(200).json(query.data);
        } else {
            res.status(400).json({ error: query.error });
        }
        

    }

    /**Para actualizar un estudiante */
    async updateSchoolar(req, res) {
        const id = req.id;
        const schoolar = request.body;

        const query = await SchoolarsQueries.updateSchoolar(id, schoolar);

        if (query.ok) {
            res.status(200).json(query.data);
        } else {
            res.status(400).json({ error: query.error });
        }

    }


}

export const SchoolarsController = new schoolarsController();