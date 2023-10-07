import { ContactsQueries } from "../sql/contacts.queries.js"
import { request, response } from 'express';


class contactsController {

    /**Para meter contactos */

    async store(req, res) {
        const contact = req.body;

        const query = await ContactsQueries.store(contact);

        if (query.ok) {
            return res.status(201).json(query.data);
        } else {
            return res.status(400).json(query.error);
        }

        
    }

    /**para buscar contact por ID */
    async findStContacts(req, res) {
        const id = req.params.id;

        const query = await ContactsQueries.findContacts(id);

        if (query.ok) {
            return res.status(200).json(query.data);
        } else {
            return res.status(400).json(query.error);
        }


    }

    /**Para actualizar un contacto  */
    async updateStContact(req, res) {
           
            const id = req.params.id;
            const contact = req.body;
    
            const query = await ContactsQueries.updateStContact(id, contact);
    
            if (query.ok) {
                return res.status(200).json(query.message);
            } else {
                return res.status(400).json(query.error);
            }

    }


}

export const contactsController = new contactsController();