import { query } from "express"
import { schoolarsModel } from "../models/schoolars.js"
import { Op as Op } from 'sequelize'

class schoolarsQueries {

    /**Para meter becados */

    async store(student) {
        try {
            const query = await schoolarsModel.create(student);
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al guardar la información nueva: ${error.message}`);
        } finally {
            return { ok: true, data: query };
        }
    }

    /**para buscar schoolar por ID */
    async findSchoolar(id) {
        try {
            const query = await schoolarsModel.findOne(
                {
                    where:
                        { id: id }
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al buscar el becado: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }

    /**Para actualizar un estudiante */
    async updateSchoolar(id, schoolar) {
        try {
            // Utiliza el método `update` de Sequelize para actualizar la fila en función del ID
            const query = await schoolarsModel.update(schoolar, {
                where: { id: id },
            });
        } catch (error) {
            console.log('error: ', error);
            return { ok: false, error: `Error al actualizar el estudiante: ${error.message}` };
        } finally {
            return { ok: true, message: 'Becado actualizado correctamente' };
        }

    }

    async countSchoolars(res) {
        const highschool = await schoolarsModel.count({
            where: {
                level: 0
            }
        });

        const college = await schoolarsModel.count({
            where: {
                level: 1
            }
        });

        const total = highschool + college;
       return ({highschool:highschool, college:college, total:total})

    }



}

export const SchoolarsQueries = new schoolarsQueries();