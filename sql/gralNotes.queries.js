import { query } from "express"
import { GralNotesModel } from "../models/gralNotes.js"
import { Op as Op } from 'sequelize'

class gralNotesQueries {

    async store(gralNotes) {
        try {
            const query = await GralNotesModel.create(gralNotes);
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear la nota: ${error.message}`);
        } finally {
            return { ok: true, data: query };
        }
    }

    async findgralNotes(idst) {
        try {

            const query = await GralNotesModel.findAll({
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
            const query = await GralNotesModel.update(gralNotes)({
                where: { id: id },
            });
        } catch (error) {
            console.log('error: ', error);
            return { ok: false, error: `Error al actualizar la nota: ${error.message}` };
        } finally {
            return { ok: true, message: 'Nota actualizada correctamente' };
        }

    }

    async findPendings() {
        const query = await GralNotesModel.findAll({
            attributes: ['idst'],
            where: {
                categoria: 1,
            }
        });
        const data = query.map(result => result.dataValues.idst);

        return { ok: true, data: data };
    }




}

export const GralNotesQueries = new gralNotesQueries();