import { query } from "express"
import { gralNotesQueries } from "../sql/gralNotes.queries.js"
import { request, response } from 'express'

class gralNotesController{
    
    async store(request,response) {
        const gralNotes = request.body;

        const query = await gralNotesQueries.store(gralNotes);

        if (query.ok) {
            return response.status(200).json(query.data);
        }else{
            return response.status(400).json(query.error);
        }

        
    }

    async findgralNotes(request,response) {
        const idst = request.idst;

        const query = await gralNotesQueries.findgralNotes(idst);

        if (query.ok) {
            return response.status(200).json(query.data);
        }else{
            return response.status(400).json(query.error);
        }


    }

    async updategralNotes(request,response) {
        const id = request.id;
        const gralNotes = request.body;

        const query = await gralNotesQueries.updategralNotes(id,gralNotes);

        if (query.ok) {
            return response.status(200).json(query.message);
        }else{
            return response.status(400).json(query.error);
        }
    }



}

export const gralNotesQueries = new gralNotes();