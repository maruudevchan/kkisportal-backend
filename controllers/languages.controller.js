import { query } from "express"
import { languagesModel } from "../models/languages.js"
import { http } from "http"
import { Op as Op } from 'sequelize'

class languagesQueries {

    /**Para meter languages */

    async store(language) {
        try {
            const query = await languagesModel.create(language);
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear el asesor: ${error.message}`);
        } finally {
            return { ok: true, data: query };
        }
    }

    /**para buscar language por ID */
    async findlanguage(id) {
        try {
            const query = await languagesModel.findOne(
                {
                    where:
                        { id: id }
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear el asesor: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }

    /**Para actualizar un language */
    async updatelanguage(id, language) {
        try {
            // Utiliza el método `update` de Sequelize para actualizar la fila en función del ID
            const [updatedRows] = await languagesModel.update(language, {
                where: { id: id },
            });
        } catch (error) {
            console.log('error: ', error);
            return { ok: false, error: `Error al actualizar el idioma: ${error.message}` };
        } finally {
            return { ok: true, message: 'Idioma actualizado correctamente' };
        }

    }


}