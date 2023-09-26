import { query } from "express"
import { advisorsModel } from "../models/advisors.js"
import { http } from "http"
import { Op as Op } from 'sequelize'

class advisorsQueries {

    /**Para meter advisors */

    async store(advisor) {
        try {
            const query = await advisorsModel.create(advisor);
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear el asesor: ${error.message}`);
        } finally {
            return { ok: true, data: query };
        }
    }

    /**para buscar advisor por ID */
    async findAdvisor(id) {
        try {
            const query = await advisorsModel.findOne(
                {
                    where:
                        { id: id }
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear el asesor: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }

    /**Para actualizar un advisor */
    async updateAdvisor(id, advisor) {
        try {
            // Utiliza el método `update` de Sequelize para actualizar la fila en función del ID
            const [updatedRows] = await advisorsModel.update(advisor, {
                where: { id: id },
            });
        } catch (error) {
            console.log('error: ', error);
            return { ok: false, error: `Error al actualizar el asesor: ${error.message}` };
        } finally {
            return { ok: true, message: 'Asesor actualizado correctamente' };
        }

    }


}

