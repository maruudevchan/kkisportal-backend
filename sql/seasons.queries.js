import { query } from "express"
import { seasonsModel } from "../models/seasons.js"
import { Op as Op } from 'sequelize'

class seasonsQueries {

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


    /**para enlistar temporadas */
    async listSeasons() {
        try {
            const query = await seasonsModel.findAll({
                attributes: ['id','season'],
                order: [['id', 'ASC']]
              });
              
              return { ok: true, data: query };

        } catch (error) {
            console.error('Error al traer las estaciones:', error);
            throw new Error(`Error al traer las estaciones: ${error.message}`);
        }
        
    }


}

export const SeasonsQueries = new seasonsQueries();