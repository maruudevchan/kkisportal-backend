import { query } from "express"
import { sizesModel } from "../models/sizes.js"
import { http } from "http"
import { Op as Op } from 'sequelize'

class sizesQueries {

    /**Para meter sizes */

    async store(size) {
        try {
            const query = await sizesModel.create(size);
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear la talla: ${error.message}`);
        } finally {
            return { ok: true, data: query };
        }
    }

    /**para buscar size por ID */
    async findSize(id) {
        try {
            const query = await sizesModel.findOne(
                {
                    where:
                        { id: id }
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al buscar la talla: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }

    /**Para actualizar una talla */
    async updateSize(id, size) {
        try {
            // Utiliza el método `update` de Sequelize para actualizar la fila en función del ID
            const query = await sizesModel.update(size, {
                where: { id: id },
            });
        } catch (error) {
            console.log('error: ', error);
            return { ok: false, error: `Error al actualizar la talla: ${error.message}` };
        } finally {
            return { ok: true, message: 'talla actualizado correctamente' };
        }

    }


}