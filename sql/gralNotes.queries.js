import { query } from "express"
import { gralNotesModel } from "../models/gralNotes.js"
import { Op as Op } from 'sequelize'

class gralNotesQueries{
    
    async store(gralNotes) {
        try {
            const query = await gralNotesModel.create(gralNotes);
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear la nota: ${error.message}`);
        } finally {
            return { ok: true, data: query };
        }
    }

    async findgralNotes(idst) {
        try {

            const query = await gralNotesModel.findAll({
                where: {
                    idst: idst
                }
            });
            
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al buscar las notas: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }

    async updategralNotes(id, gralNotes) {
        try {
            // Utiliza el método `update` de Sequelize para actualizar la fila en función del ID
            const query = await gralNotesModel.update(gralNotes)({
                where: { id: id },
            });
        } catch (error) {
            console.log('error: ', error);
            return { ok: false, error: `Error al actualizar la nota: ${error.message}` };
        } finally {
            return { ok: true, message: 'Nota actualizada correctamente' };
        }

    }



}

export const GralNotesQueries = new gralNotesQueries();