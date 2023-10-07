import { query } from "express"
import { schoolsModel } from "../models/schools.js"
import { Op as Op } from 'sequelize'

class aschoolsQueries {

    /**Para meter escuelas */

    async store(school) {
        try {
            const query = await schoolsModel.create(school);
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear la escuela: ${error.message}`);
        } finally {
            return { ok: true, data: query };
        }
    }

    /**para buscar advisor por ID */
    async findSchool(id) {
        try {
            const query = await schoolsModel.findOne(
                {
                    where:
                        { id: id }
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al actualizar: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }

    /**Para actualizar un advisor */
    async updateSchool(id, school) {
        try {
            // Utiliza el método `update` de Sequelize para actualizar la fila en función del ID
            const query = await schoolsModel.update(school, {
                where: { id: id },
            });
        } catch (error) {
            console.log('error: ', error);
            return { ok: false, error: `Error al actualizar la escuela: ${error.message}` };
        } finally {
            return { ok: true, message: 'Escuela actualizada correctamente' };
        }

    }


}

export const SchoolsQueries = new aschoolsQueries();