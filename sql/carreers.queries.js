import { query } from "express"
import { carreersModel } from "../models/carreers.js"
import { http } from "http"
import { Op as Op } from 'sequelize'

class carreersQueries {

    /**Para meter carreers */

    async store(carreers) {
        try {
            const query = await carreersModel.create(carreers);
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear el asesor: ${error.message}`);
        } finally {
            return { ok: true, data: query };
        }
    }

    /**para buscar carreers por ID */
    async findCarreer(id) {
        try {
            const query = await carreersModel.findOne(
                {
                    where:
                        { id: id }
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al buscar la carrera: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }

    /**Para actualizar un carreers*/
    async updateCarreers(id, carreers) {
        try {
            // Utiliza el método `update` de Sequelize para actualizar la fila en función del ID
            const [updatedRows] = await carreersModel.update(carreers)({
                where: { id: id },
            });
        } catch (error) {
            console.log('error: ', error);
            return { ok: false, error: `Error al actualizar la carrera: ${error.message}` };
        } finally {
            return { ok: true, message: 'Carrera actualizada correctamente' };
        }

    }


}

export const CarreersQueries = new carreersQueries();