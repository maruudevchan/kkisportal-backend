import { query } from "express"
import { highSchoolGradesModel  } from "../models/highSchoolGrades.js"
import { http } from "http"
import { Op as Op, Sequelize } from 'sequelize'

class highSchoolGradesQueries {

    /**Para meter calificaciones SIN REGISTRAR */

    async store(grades) {
        try {
            //Primero verifico que no exista récord de calificaciones del alumno
            const query = await highSchoolGradesModel.findOne(
                {
                    where:
                        { idst: grades.idst }
                }
            );

            if (query) {
                return { ok: false, error: 'Ya existen calificaciones registradas para este alumno' };
            }

            //quiere decir que, no existe el registro así que lo creo
            const insert = await highSchoolGradesModel.create(grades);

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
            const query = await highSchoolGradesModel.findOne(
                {
                    where:
                        { idst: grades.idst }
                }
            );

            if (!query) {
                return { ok: false, error: 'No existen calificaciones registradas para este alumno' };
            }

            //quiere decir que, sí existe el registro así que lo actualizo
            const update = await highSchoolGradesModel.update(grades,
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

    async averageGralEng(idst) {
        try{
            //primero promediamos general

            const gralAverage = highSchoolGradesModel.findOne({
                where: {
                    idst: idst
                },
                attributes: [
                    [Sequelize.literal(
                        'sem1GPA + sem2GPA +  sem3GPA + sem4GPA + sem5GPA + sem6GPA'
                    )]
                ]})

            //ahora promediamos inglés

            const engAverage = highSchoolGradesModel.findOne({
                where: {
                    idst: idst
                },
                attributes: [
                    [Sequelize.literal(
                        'enG1GPA + enG2GPA + enG3GPA + enG4GPA + enG5GPA + enG6GPA'
                    )]
                ]})

        }catch(error){

        }finally{

        }

    }


}

export const highSchoolGradesQueries = new highSchoolGradesQueries();
