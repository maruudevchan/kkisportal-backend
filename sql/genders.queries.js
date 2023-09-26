import { query } from "express"
import { genderModel, gendersModel } from "../models/genders.js"
import { http } from "http"
import { Op as Op } from 'sequelize'

class gendersQueries {

    /**Para meter géneros */

    async store(gender) {
        try {
            
            const search = await gendersModel.findOne({ where: { gender: gender.gender } });

            if (resultadoDB.equals(search) ? true : false) {

                throw new Exception("El valor ya existe en la base de datos.");

            } else {

                const query = await advisorsModel.create(gender);
            }
            
        } catch (error) {

            console.log('error: ', error);

            return error(`Error al crear el género: ${error.message}`);

        } finally {

            return { ok: true, data: query };
        }
    }

    /**para buscar gender */
    async findGender(id) {
        try {
            const query = await gendersModel.findOne(
                {
                    where:
                        { id: id }
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al encontrar el género: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }

    /**Para actualizar la info de un género */
    async updateGender(id, gender) {
        try {
            // Utiliza el método `update` de Sequelize para actualizar la fila en función del ID
            const row = await gendersModel.update(gender, {
                where: { id: id },
            });
        } catch (error) {

            console.log('error: ', error);

            return { ok: false, error: `Error al actualizar el asesor: ${error.message}` };

        } finally {
            
            return { ok: true, message: 'Asesor actualizado correctamente' };
        }

    }


}

export const gendersQueries = new gendersQueries();