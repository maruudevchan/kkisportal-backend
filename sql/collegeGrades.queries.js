import { query } from "express"
import { collegeGradesModel } from "../models/collegeGrades.js"
import { http } from "http"
import { Op as Op, Sequelize } from 'sequelize'

class collegeGradesQueries {

    /**Para meter calificaciones SIN REGISTRAR */

    async store(grades) {
        try {
            //Primero verifico que no exista récord de calificaciones del alumno
            const query = await collegeGradesModel.findOne(
                {
                    where:
                        { idst: grades.idst }
                }
            );

            if (query) {
                return { ok: false, error: 'Ya existen calificaciones registradas para este alumno' };
            }

            //quiere decir que, no existe el registro así que lo creo
            const insert = await collegeGradesModel.create(grades);

        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear el registro de calificaciones: ${error.message}`);
        } finally {

            return { ok: true, data: query };
        }
    }

    /**Para actualizar calificaciones ya registradas */
    async update(grades) {
        try {
            //Primero verifico que exista récord de calificaciones del alumno
            const query = await collegeGradesModel.findOne(
                {
                    where:
                        { idst: grades.idst }
                }
            );

            if (!query) {
                return { ok: false, error: 'No existen calificaciones registradas para este alumno' };
            }

            //quiere decir que, sí existe el registro así que lo actualizo
            const update = await collegeGradesModel.update(grades,
                {
                    where:
                        { idst: grades.idst }
                }
            );

        } catch (error) {
            console.log('error: ', error);
            return error(`Error al actualizar el registro de calificaciones: ${error.message}`);
        } finally {
            return { ok: true, data: query };
        }
    }

    //Para promediar general y para promediar inglés de cada periodo

    async averageGral(idst) {
        try {
            //primero promediamos general

            const gralAverage = collegeGradesModel.findOne({
                where: {
                    idst: idst
                },
                attributes: [
                    [Sequelize.literal(
                        'term0GPA + term1GPA + term2GPA + term3GPA + term4GPA + term5GPA + term6GPA + term7GPA + term8GPA + term9GPA + term10GPA + term11GPA + term12GPA'
                    )]
                ]
            })

        } catch (error) {
            console.log('error: ', error);
            return error(`Error al promediar las calificaciones: ${error.message}`);
        } finally {
            return { ok: true, data: gralAverage };
        }
    }


    async averageEng(idst) {
        try {

            //ahora promediamos inglés
            const engAverage = collegeGradesModel.findOne({
                where: {
                    idst: idst
                },
                attributes: [
                    [Sequelize.literal(
                        'en0GPA + en1GPA + en2GPA + en3GPA + en4GPA + en5GPA + en6GPA + en7GPA + en8GPA + en9GPA + en10GPA + en11GPA + en12GPA'
                    )]
                ]
            })

        } catch (error) {
            console.log('error: ', error);
            return error(`Error al promediar las calificaciones: ${error.message}`);

        } finally {
            return { ok: true, data: engAverage };
        }

    }

    //verifico los reportes pendientes
    async verifyReports(idst) {
        try{
            //hago el querysearch
            const query = await collegeGradesModel.findOne({
                where: {
                    idst: idst
                },
                attributes: [
                    'hasReport0','hasReport1', 'hasReport2', 'hasReport3', 'hasReport4', 'hasReport5', 'hasReport6', 'hasReport7', 'hasReport8', 'hasReport9', 'hasReport10', 'hasReport11', 'hasReport12'
                ]
            })

        }catch(error){
            console.log('error: ', error);
            return error(`Error al verificar los reportes: ${error.message}`);
        }finally{
            return { ok: true, data: query };
        }
    }

}

export const highSchoolGradesQueries = new highSchoolGradesQueries();
