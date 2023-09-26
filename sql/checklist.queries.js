import { query } from "express"
import { checklistsModel } from "../models/checklist.js"
import { http } from "http"
import { Op as Op } from 'sequelize'

class checklistsQueries {

    /**Para meter pendientes */

    async store(checklist) {
        try {
            const query = await checklistsModel.create(checklist);
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear el pendiente: ${error.message}`);
        } finally {
            return { ok: true, data: query };
        }
    }

    /**para buscar pendings por ID */
    async findSchecklist(idst) {
        try {
            const query = await checklistsModel.findOne(
                {
                    where:
                        { idst: idst }
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al buscar la lista de pendientes: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }

    /**Para actualizar un pendiente*/
    async updateChecklist(idst, checklist) {
        try {
            // Utiliza el método `update` de Sequelize para actualizar la fila en función del ID
            const query = await checklistsModel.update(checklist)({
                where: { idst: idst},
            });
        } catch (error) {
            console.log('error: ', error);
            return { ok: false, error: `Error al actualizar la lista de pendientes: ${error.message}` };
        } finally {
            return { ok: true, message: 'Pendientes actualizados correctamente' };
        }

    }


}

export const carreersQueries = new carreersQueries();