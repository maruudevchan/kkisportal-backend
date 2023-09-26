import { query } from "express"
import {houseSituationsModel} from "../models/houseSituations.js"
import { http } from "http"
import { Op as Op } from 'sequelize'

class HouseSituationsQueries {

    /**Para meter situaciones */

    async store(HouseSituation) {
        try {
            const query = await houseSituationsModel.create(HouseSituation);
        } catch (error) {

            console.log('error: ', error);
            return error(`Error al crear el asesor: ${error.message}`);

        } finally {

            return { ok: true, data: query };

        }
    }

    /**para buscar HouseSituations por ID */
    async findHouseSituations(id) {
        try {
            const query = await houseSituationsModel.findOne(
                {
                    where:
                        { id: id }
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al buscar la situación: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }

    /**Para actualizar un houseSituations */
    async updatehouseSituations(id, houseSituation) {
        try {
            // Utiliza el método `update` de Sequelize para actualizar la fila en función del ID
            const [updatedRows] = await houseSituationsModel.update(houseSituation, {
                where: { id: id },
            });

        } catch (error) {

            console.log('error: ', error);
            return { ok: false, error: `Error al actualizar la situación: ${error.message}` };

        } finally {
            
            return { ok: true, message: 'Asesor actualizado correctamente' };
        }

    }


}

export const houseSituationsQueries = new HouseSituationsQueries();