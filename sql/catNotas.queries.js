import { query } from "express"
import { CatNotasModel } from "../models/catNotas.js"
import { http } from "http"
import { Op as Op } from 'sequelize'

class catNotasQueries {

    async store(catNotas) {
        try {
            const query = await CatNotasModel.create(catNotas);
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear la nota: ${error.message}`);
        } finally {
            return { ok: true, data: query };
        }
    }

    async findcatNotas(idst) {
        try {
            const query = await CatNotasModel.findOne(
                {
                    where:
                        { idst: idst }
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al buscar la nota: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }

    async updateNotas(idst, catNotas) {
        try {
            // Utiliza el método `update` de Sequelize para actualizar la fila en función del ID
            const [updatedRows] = await CatNotasModel.update(catNotas)({
                where: { idst: idst },
            });
        } catch (error) {
            console.log('error: ', error);
            return { ok: false, error: `Error al actualizar la nota: ${error.message}` };
        } finally {
            return { ok: true, message: 'Nota actualizada correctamente' };
        }

    }   
}

export const CatNotasQueries = new catNotasQueries();