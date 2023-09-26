import { query } from "express"
import { sponsorsSchoolarsModel } from "../models/sponsorsSchoolars.js"
import { http } from "http"
import { Op as Op } from 'sequelize'

class sponsorsSchoolarsQueries {

    /**Para meter sizes */

    async store(schoolarSponsor) {
        try {
            const query = await sponsorsSchoolarsModel.create(schoolarSponsor);
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al registrar el becado al sponsor: ${error.message}`);
        } finally {
            return { ok: true, data: query };
        }
    }

    /**para buscar quién patrocina al becado */
    async findSponsor(idst) {
        try {
            const query = await sponsorsSchoolarsModel.findOne(
                {
                    where:
                        { idst: idst }
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al buscar el sponsor del becado: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }

    /**para buscar todos los becados patrocinados por sponsor */

    async findSchoolars(sponsor) {
        try {
            const query = await sponsorsSchoolarsModel.findAll(
                {
                    where:
                        { sponsor: sponsor }
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al buscar los becados del patrocinador: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }



    /**Para actualizar quién patrocina al becado */
    async updateSponsor(idst) {
        try {
            // Utiliza el método `update` de Sequelize para actualizar la fila en función del ID
            const query = await sponsorsSchoolarsModel.update(idst, {
                where: { idst: idst },
            });
        } catch (error) {
            console.log('error: ', error);
            return { ok: false, error: `Error al actualizar el sponsor del becado: ${error.message}` };
        } finally {
            return { ok: true, message: 'Becado actualizado correctamente' };
        }

    }


}