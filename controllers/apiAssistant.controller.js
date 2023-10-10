import { SponsorsQueries } from "../sql/sponsors.queries.js";
import { SchoolarsQueries } from "../sql/schoolars.queries.js";
import { AdvisorsQueries } from "../sql/advisors.queries.js";
import { GralNotesController } from "./gralNotes.controller.js";

import { request, response } from 'express';


class apiAssistantController {

    async getData(req, res) {
        const sponsors = await SponsorsQueries.countSponsors();
        const advisors = await AdvisorsQueries.countAdvisors();
        const highschool = await SchoolarsQueries.countSchoolars();
       const pendings = await SchoolarsQueries.listPendings();

        res.json({ sponsors: sponsors, advisors: advisors, schoolars: highschool, pendings: pendings });
    }
}


export const ApiAssistantController = new apiAssistantController();
