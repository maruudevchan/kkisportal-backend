import { GralNotesQueries } from "../sql/gralNotes.queries.js"
import { request, response } from 'express'

class gralNotesController{
    
    async store(req,res) {
        const gralNotes = req.body;

        const query = await GralNotesQueries.store(gralNotes);

        if (query.ok) {
            return res.status(200).json(query.data);
        }else{
            return res.status(400).json(query.error);
        }

        
    }

    async findgralNotes(req,res) {
        const idst = req.idst;

        const query = await GralNotesQueries.findgralNotes(idst);

        if (query.ok) {
            return res.status(200).json(query.data);
        }else{
            return res.status(400).json(query.error);
        }


    }

    async updategralNotes(req,res) {
        const id = req.id;
        const gralNotes = req.body;

        const query = await GralNotesQueries.updategralNotes(id,gralNotes);

        if (query.ok) {
            return res.status(200).json(query.message);
        }else{
            return res.status(400).json(query.error);
        }
    }



}

export const GralNotesQueries = new gralNotes();