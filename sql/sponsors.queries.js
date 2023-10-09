import { query } from "express"
import { sponsorsModel } from "../models/sponsors.js"


class sponsorsQueries {

    /**Para meter advisors */

    async store(sponsor) {
        try {
            const query = await sponsorsModel.create(sponsor);
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear el sponsor: ${error.message}`);
        } finally {
            return { ok: true, data: query };
        }
    }

    /**para buscar advisor por ID */
    async findSponsor(id) {
        try {
            const query = await sponsorsModel.findOne(
                {
                    where:
                        { id: id }
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear el sponsor: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }

    /**Para actualizar un sponsor */
    async updateSponsor(id, sponsor) {
        try {
            // Utiliza el método `update` de Sequelize para actualizar la fila en función del ID
            const row= await sponsorsModel.update(sponsor, {
                where: { id: id },
            });
        } catch (error) {
            console.log('error: ', error);
            return { ok: false, error: `Error al actualizar el patrocinador: ${error.message}` };
        } finally {
            return { ok: true, message: 'patrocinador actualizado correctamente' };
        }

    }

    async countSponsors(res){
        const sponsors = await sponsorsModel.count();
        return sponsors

    }

}

export const SponsorsQueries = new sponsorsQueries();