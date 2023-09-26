import { query } from "express"
import { surveys, surveysModel } from "../models/surveys.js"
import { http } from "http"
import { Op as Op } from 'sequelize'

class surveyssQueries {

    /**Para meter encuestas */

    async store(surveys) {
        try {
            const query = await surveysModel.create(surveys);
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear la encuesta: ${error.message}`);
        } finally {
            return { ok: true, data: query };
        }
    }

    /**para buscar encuesta por ID */
    async findSurveySchoolar(id) {
        try {
            const query = await surveysModel.findOne(
                {
                    where:
                        { idst: id }
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear el survey: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }

     /**para buscar encuesta por ID */
     async updateSurveSchoolar(id) {
        try {
            const query = await surveysModel.findOne(
                {
                    where:
                        { idst: id }
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al actualizar el survey: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }


}