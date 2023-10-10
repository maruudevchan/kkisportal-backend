import { GralNotesQueries } from "../sql/gralNotes.queries.js";
import { request, response } from 'express';

class gralNotesController {
    
    async store(req, res) {
        const gralNotes = req.body;

        const query = await GralNotesQueries.store(gralNotes);

        if (query.ok) {
            return res.status(200).json(query.data);
        } else {
            return res.status(400).json(query.error);
        }
    }

    async findgralNotes(req, res) {
        const idst = req.params.idst; // Debes obtener el parámetro idst de la URL

        const query = await GralNotesQueries.findgralNotes(idst);

        if (query.ok) {
            return res.status(200).json(query.data);
        } else {
            return res.status(400).json(query.error);
        }
    }

    async updategralNotes(req, res) {
        const id = req.params.id; // Debes obtener el parámetro id de la URL
        const gralNotes = req.body;

        const query = await GralNotesQueries.updategralNotes(id, gralNotes);

        if (query.ok) {
            return res.status(200).json(query.message);
        } else {
            return res.status(400).json(query.error);
        }
    }

    async findPendings(req, res) {
        const query = await GralNotesQueries.findPendings();
        if (query.ok) {
            console.log(query.data);
            res.json(query.data);
        } else {
            res.status(404).json('no pendings');
        }
    }

    //para traer la lista de alumnos
    async findList(req, res){
        const query = await GralNotesQueries.findList();
        if (query.ok) {
            console.log(query.data);
            res.json(query.data);
        } else {
            res.status(404).json('no list');
        }
    }

    
}

export const GralNotesController = new gralNotesController();
