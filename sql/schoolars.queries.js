import { query } from "express"
import { schoolarsModel } from "../models/schoolars.js"
import { Op as Op } from 'sequelize'
import { GralNotesQueries } from "./gralNotes.queries.js";
import { schoolsModel } from "../models/schools.js";

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

    /**Para buscar todos los becados */
    async getSchoolars() {
        try {
            const query = await schoolarsModel.findAll({
                attributes: ['id', 'name', 'lastname', 'level', 'school'],
                where: {
                    level: [0,1],
                    status: [1, 2]
                }
            });

            //reemplazamos el id de la escuela por su nombre
            const results = await Promise.all(query.map(async (student) => {
                const schoolId = student.dataValues.school;
                const school = await schoolsModel.findByPk(schoolId);
                const schoolName = school ? school.dataValues.school : 'Escuela Desconocida';

                return {
                    id: student.dataValues.id,
                    name: student.dataValues.name,
                    lastname: student.dataValues.lastname,
                    level: student.dataValues.level,
                    school: schoolName
                };
            }
            ));

            return results;
        } catch (error) {
            throw error;
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
    /**Para contar becados de universidad y bachillerato */
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
        return ({ highschool: highschool, college: college, total: total })

    }

    /*para traer la lista de alumnos con pendientes*/
    async listPendings() {
        try {
            const res = await GralNotesQueries.findPendings();
            // Busco aquí los alumnos con pendientes por medio de ids de res
            const query = await schoolarsModel.findAll({
                attributes: ['id', 'name', 'lastname', 'level', 'school'],
                where: {
                    id: {
                        [Op.in]: res.data
                    }
                }
            });

            const results = await Promise.all(query.map(async (student) => {
                const schoolId = student.dataValues.school;
                const school = await schoolsModel.findByPk(schoolId);
                const schoolName = school ? school.dataValues.school : 'Escuela Desconocida';

                // Retorna el objeto con los datos del estudiante y el nombre de la escuela
                return {
                    id: student.dataValues.id,
                    name: student.dataValues.name,
                    lastname: student.dataValues.lastname,
                    level: student.dataValues.level,
                    school: schoolName
                };
            }
            ));

            return results;
        } catch (error) {
            throw error;
        }
    }




}

export const SchoolarsQueries = new schoolarsQueries();