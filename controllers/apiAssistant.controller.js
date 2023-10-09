import { SponsorsQueries } from "../sql/sponsors.queries.js";
import { SchoolarsQueries } from "../sql/schoolars.queries.js";
import { AdvisorsQueries } from "../sql/advisors.queries.js";

import {request, response} from 'express';



class apiAssistantController {

    async getData(req = request, res = response) {
        const sponsors = await SponsorsQueries.countSponsors();
        const advisors = await AdvisorsQueries.countAdvisors();
        const highschool = await SchoolarsQueries.countSchoolars();
        const data = {
            sponsors,
            advisors,
            highschool
        }
        res.json(data);
    }
}


export const ApiAssistantController = new apiAssistantController();
