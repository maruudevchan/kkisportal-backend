import { query } from "express"
import { seasonsModel } from "../models/seasons.js"
import { http } from "http"
import { Op as Op } from 'sequelize'

class advisorsQueries {

    /**para buscar season por ID */
    async findSeason(id) {
        try {
            const query = await seasonsModel.findOne(
                {
                    where:
                        { id: id }
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al buscar la temporada: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }


}