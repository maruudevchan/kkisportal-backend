import { query } from "express"
import { locationsModel } from "../models/locations.js"
import { http } from "http"
import { Op as Op } from 'sequelize'

class advisorsQueries {

    /**Para meter ciudades */

    async store(location) {
        try {
            const query = await locationsModel.create(location);
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear la ubicación: ${error.message}`);
        } finally {
            return { ok: true, data: query };
        }
    }

    /**para buscar ciudad por ID */
    async findLocation(id) {
        try {
            const query = await locationsModel.findOne(
                {
                    where:
                        { id: id }
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al buscar el id: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }

    /**Para actualizar una ciudad */
    async updateAdvisor(id, location) {
        try {
            // Utiliza el método `update` de Sequelize para actualizar la fila en función del ID
            const update = await locationsModel.update(location, {
                where: { id: id },
            });
        } catch (error) {
            console.log('error: ', error);
            return { ok: false, error: `Error al actualizar la ciudad : ${error.message}` };
        } finally {
            return { ok: true, message: 'ciudad actualizada correctamente' };
        }

    }


}