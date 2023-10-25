import { query } from "express"
import {houseSituationsModel} from "../models/houseSituations.js"
import { Op as Op } from 'sequelize'

class houseSituationsQueries {

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
            const row = await houseSituationsModel.update(houseSituation, {
                where: { id: id },
            });
            return row

        } catch (error) {

            console.log('error: ', error);
            return { ok: false, error: `Error al actualizar la situación: ${error.message}` };

        }

    }

    /**Para listar houseSituations */
    async listHouseSituations() {
        try {
            const query = await houseSituationsModel.findAll(
                {
                    attributes: ['id', 'situation'],
                    order: [['situation', 'ASC']]
                }
            );
            return { ok: true, data: query };
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al listar las situaciones: ${error.message}`);
        }
    }


}

export const HouseSituationsQueries = new houseSituationsQueries();