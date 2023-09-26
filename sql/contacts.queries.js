import { query } from "express"
import { contactsModel } from "../models/colonias.js"
import { http } from "http"
import { Op as Op } from 'sequelize'

class contactsQueries {

    /**Para meter contactos */

    async store(contact) {
        try {
            const query = await contactsModel.create(contact);
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al crear el contacto: ${error.message}`);
        } finally {
            return { ok: true, data: query };
        }
    }

    /**para buscar contact por ID */
    async findStContacts(id) {
        try {
            const query = await contactsModel.findOne(
                {
                    where:
                        { idst: id }
                }
            );
        } catch (error) {
            console.log('error: ', error);
            return error(`Error al buscar el asesor: ${error.message}`);
        } finally {
            return { ok: true, data: query.data };
        }

    }

    /**Para actualizar un contacto  */
    async updateStContact(id, contact) {
        try {
            // Utiliza el método `update` de Sequelize para actualizar la fila en función del ID
            const row = await contactsModel.update(contact, {
                where: { idst: id },
            });
        } catch (error) {
            console.log('error: ', error);
            return { ok: false, error: `Error al actualizar el contacto: ${error.message}` };
        } finally {
            return { ok: true, message: 'Contacto actualizado correctamente', data: row };
        }

    }


}

export const contactsQueries = new contactsQueries();