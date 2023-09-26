import { query } from "express"
import { contactsQueries } from "../sql/contacts.queries.js"
import { http } from "http"
import { Op as Op } from 'sequelize'
import { request, response } from 'express';
import { Payload } from '../helpers/payload.js';


class contactsController {

    /**Para meter contactos */

    async store(request, response) {
        const contact = request.body;

        const query = await contactsQueries.store(contact);

        if (query.ok) {
            return response.status(201).json(query.data);
        } else {
            return response.status(400).json(query.error);
        }

        
    }

    /**para buscar contact por ID */
    async findStContacts(request, response) {
        const id = request.params.id;

        const query = await contactsQueries.findContacts(id);

        if (query.ok) {
            return response.status(200).json(query.data);
        } else {
            return response.status(400).json(query.error);
        }


    }

    /**Para actualizar un contacto  */
    async updateStContact(request, response) {
           
            const id = request.params.id;
            const contact = request.body;
    
            const query = await contactsQueries.updateStContact(id, contact);
    
            if (query.ok) {
                return response.status(200).json(query.message);
            } else {
                return response.status(400).json(query.error);
            }

    }


}

export const contactsController = new contactsController();