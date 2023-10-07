import { query } from "express"
import { LanguagesQueries } from "../sql/languages.queries.js"
import { request, response } from 'express';


class languagesController {

    /**Para meter languages */

    async store(req, res) {
        const language = req.body;
        const query = await LanguagesQueries.store(language);

        if (query.ok) {
            return res.status(200).json(query);
        } else {
            return res.status(400).json(query);
        }
        
    }

    /**para buscar language por ID */
    async findlanguage(req, res) {
        const id = req.id;
        const query = await LanguagesQueries.findlanguage(id);

        if (query.ok) {
            return res.status(200).json(query);
        } else {
            return res.status(400).json(query);
        }

    }

    /**Para actualizar un language */
    async updatelanguage(req, res) {
        const language = req.body;
        const query = await LanguagesQueries.updatelanguage(language);

        if (query.ok) {
            return res.status(200).json(query);
        } else {
            return res.status(400).json(query);
        }

    }


}

export const LanguagesController = new languagesController();