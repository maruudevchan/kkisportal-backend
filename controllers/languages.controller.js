import { query } from "express"
import { languagesQueries } from "../sql/languages.queries.js"
import { request, response } from 'express';


class languagesController {

    /**Para meter languages */

    async store(request, response) {
        const language = request.body;
        const query = await languagesQueries.store(language);

        if (query.ok) {
            return response.status(200).json(query);
        } else {
            return response.status(400).json(query);
        }
        
    }

    /**para buscar language por ID */
    async findlanguage(request, response) {
        const id = request.id;
        const query = await languagesQueries.findlanguage(id);

        if (query.ok) {
            return response.status(200).json(query);
        } else {
            return response.status(400).json(query);
        }

    }

    /**Para actualizar un language */
    async updatelanguage(request, response) {
        const language = request.body;
        const query = await languagesQueries.updatelanguage(language);

        if (query.ok) {
            return response.status(200).json(query);
        } else {
            return response.status(400).json(query);
        }

    }


}

export const LanguagesController = new languagesController();