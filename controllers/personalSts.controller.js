import { query } from "express"
import { personalStsModel } from "../models/personalSts.js"
import { http } from "http"
import { Op as Op } from 'sequelize'

class advisorsQueries {

    /**Para meter situaciones personales */

    async store(personalSt) {
        try {
            const query = await personalStsModel.create(personalSt);
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear la situación personal: ${error.message}`);
        } finally {
            return { ok: true, data: query };
        }
    }

    /**para buscar la situación personal por ID del student */
    async findAdvisor(idst) {
        try {
            const query = await personalStsModel.findOne(
                {
                    where:
                        { idst: idst}
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al buscar la situación del alumno: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }

    /**Para actualizar una situación familiar */
    async updatePersonalSts(idst, personalSt) {
        try {
            // Utiliza el método `update` de Sequelize para actualizar la fila en función del ID
            const [updatedRows] = await personalSt.update(personalSt, {
                where: { idst: idst },
            });
        } catch (error) {
            console.log('error: ', error);
            return { ok: false, error: `Error al actualizar la situación del estudiante: ${error.message}` };
        } finally {
            return { ok: true, message: 'Situación actualizada correctamente' };
        }

    }


}