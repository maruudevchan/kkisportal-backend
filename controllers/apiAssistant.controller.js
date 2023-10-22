import { SponsorsQueries } from "../sql/sponsors.queries.js";
import { SchoolarsQueries } from "../sql/schoolars.queries.js";
import { AdvisorsQueries } from "../sql/advisors.queries.js";
import { GralNotesController } from "./gralNotes.controller.js";

import { request, response } from 'express';


class apiAssistantController {

    async getData(req, response) {
        const sponsors = await SponsorsQueries.countSponsors();
        const advisors = await AdvisorsQueries.countAdvisors();

        return response.json({
            sponsors,
            advisors
        });
    }
    
    async getSchoolars(req,res){
        const highschool = await SchoolarsQueries.getSchoolars();
        return res.json(highschool);
    }

    async getPendings(req,res){
        const pendings = await SchoolarsQueries.listPendings();
        return res.json(pendings);
    }
}


export const ApiAssistantController = new apiAssistantController();
