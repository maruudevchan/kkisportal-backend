import { query } from "express"
import { statusModel } from "../models/status.js"

class statusQueries {

    /**Para meter status */

    async store(status) {
        try {
            const query = await statusModel.create(status);
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear el asesor: ${error.message}`);
        } finally {
            return { ok: true, data: query };
        }
    }

    /**para buscar advisor por ID */
    async findStatus(id) {
        try {
            const query = await statusModel.findOne(
                {
                    where:
                        { id: id }
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al buscar el status: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }

    /**Para actualizar un status */
    async updateAdvisor(id, status) {
        try {
            // Utiliza el método `update` de Sequelize para actualizar la fila en función del ID
            const query = await statusModel.update(status, {
                where: { id: id },
            });
        } catch (error) {
            console.log('error: ', error);
            return { ok: false, error: `Error al actualizar el status: ${error.message}` };
        } finally {
            return { ok: true, message: 'Status actualizado correctamente' };
        }

    }


}

export const StatusQueries = new statusQueries();