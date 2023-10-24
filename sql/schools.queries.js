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

    /**Para actualizar una escuela */
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

    /**Para traer las escuelas en orden alfabético con cierta estructura*/
    async orderedListSchools() {
        try {
            // Traemos secundarias de manera ascendente
            const jrhigh = await schoolsModel.findAll({
                attributes: ['id', 'school'],
                order: [['school', 'ASC']],
                where: {
                    type: 1
                }
            });
    
            // Traemos preparatorias de manera ascendente
            const highschool = await schoolsModel.findAll({
                attributes: ['id', 'school'],
                order: [['school', 'ASC']],
                where: {
                    type: 2
                }
            });
    
            // Traemos universidades de manera ascendente
            const college = await schoolsModel.findAll({
                attributes: ['id', 'school'],
                order: [['school', 'ASC']],
                where: {
                    type: 3
                }
            });

            return { ok: true, data: { jrhigh, highschool, college } };

        } catch (error) {
            console.error('Error al traer las escuelas:', error);
            // Puedes lanzar una excepción si lo deseas para manejar el error en otro lugar
            throw new Error(`Error al traer las escuelas: ${error.message}`);
        }
    }
    
}

export const SchoolsQueries = new aschoolsQueries();