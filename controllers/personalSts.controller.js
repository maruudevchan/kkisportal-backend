import { query } from "express"
import { personalStsQueries } from "../sql/personalSts.queries.js"
import { request, response } from "express"

class personalStsController {

    /**Para meter situaciones personales */

    async store(request, response) {
        const personalSt = request.body;
        const query = await personalStsQueries.store(personalSt);

        if (query.ok) {
            response.status(201).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }
        
    }

    /**para buscar la situación personal por ID del student */
    async findPersonalSts(request, response) {
        const idst = request.idst;
        const query = await personalStsQueries.findPersonalSts(idst);

        if (query.ok) {
            response.status(200).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }

    }

    /**Para actualizar una situación familiar */
    async updatePersonalSts(request, response) {
        const idst = request.idst;
        const personalSt = request.body;
        const query = await personalStsQueries.updatePersonalSts(idst, personalSt);

        if (query.ok) {
            response.status(200).json(query.message);
        } else {
            response.status(400).json({ error: query.error });
        }

    }

}

export const personalStsController = new personalStsController();