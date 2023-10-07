import { SurveysQueries } from "../sql/surveys.queries.js"
import { request, response } from 'express';

class surveysController {

    /**Para meter encuestas */

    async store(request, response) {
        const survey = request.body;
        const query = await SurveysQueries.store(survey);

        if (query.ok) {
            response.status(201).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }
        
    }

    /**para buscar encuesta por ID */
    async findSurveySchoolar(request, response) {
        const id = request.id;
        const query = await SurveysQueries.findSurveySchoolar(id);

        if (query.ok) {
            response.status(200).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }
        
    }

     /**para buscar encuesta por ID */
     async updateSurveSchoolar(request, response) {
        const id = request.id;
        const query = await SurveysQueries.updateSurveSchoolar(id);

        if (query.ok) {
            response.status(200).json(query.data);
        } else {
            response.status(400).json({ error: query.error });
        }
        
    }

}

export const surveysController = new surveysController();   