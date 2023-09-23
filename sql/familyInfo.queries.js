import { query } from "express"
import { familyInfoModel } from "../models/familyInfo.js"
import { http } from "http"
import { Op as Op } from 'sequelize'

class familyInfoQueries {

    /**Para meter info de familia del schoolar */

    async store(familyInfo) {
        try {
            const query = await familyInfoModel.create(familyInfo);
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear la info familiar: ${error.message}`);
        } finally {
            return { ok: true, data: query };
        }
    }

    /**para buscar famil por ID */
    async findFamilyInfoSt(id) {
        try {
            const query = await familyInfoModel.findOne(
                {
                    where:
                        { idst: id }
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al buscar la info familiar del alumno: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }

    /**Para actualizar un familo  */
    async updateStfamil(id, famil) {
        try {
            // Utiliza el método `update` de Sequelize para actualizar la fila en función del ID
            const row = await familyInfoModel.update(famil, {
                where: { idst: id },
            });
        } catch (error) {
            console.log('error: ', error);
            return { ok: false, error: `Error al actualizar el familo: ${error.message}` };
        } finally {
            return { ok: true, message: 'familo actualizado correctamente', data: row };
        }

    }


}