import { query } from "express"
import {coloniasModel } from "../models/colonias.js"
import { http } from "http"
import { Op as Op } from 'sequelize'

class coloniasQueries {

    /**Para meter colonias */

    async store(colonia) {
        try {
            const query = await coloniasModel.create(colonia);
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear la colonia: ${error.message}`);
        } finally {
            return { ok: true, data: query };
        }
    }

    /**para buscar colonia por ID */
    async findColonia(id) {
        try {
            const query = await coloniasModel.findOne(
                {
                    where:
                        { id: id }
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear la colonia: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }

    /**Para actualizar un colonia */
    async updateColonia(id, colonia) {
        try {
            // Utiliza el método `update` de Sequelize para actualizar la fila en función del ID
            const updatedRows = await coloniasModel.update(colonia, {
                where: { id: id },
            });
        } catch (error) {
            console.log('error: ', error);
            return { ok: false, error: `Error al actualizar la colonia: ${error.message}` };
        } finally {
            return { ok: true, message: 'colonia actualizado correctamente' };
        }

    }


}

export const coloniasQueries = new coloniasQueries();