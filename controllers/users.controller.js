import { UserQueries } from '../sql/users.queries.js';
import { request, response } from 'express';
import { Payload } from '../helpers/payload.js';

import pkg from 'bcrypt';
const { bcrypt } = pkg;
const saltRounds = 10;

class userController {
    static payload = new Payload();

    async createUser(request, response) {
        const user = request.body;
        //valido el email a través de un correo desde aquí
        //encrypt password
        const salt = pkg.genSaltSync(saltRounds);
        const password = pkg.hashSync(user.password, salt);
        user.password = password;
        const query = await UserQueries.store(user);
        if (query.ok) {
            return response.status(200).json({ ok: true, data: query.data });
        } else {
            console.log(query.error);
            return response.status(500).json({ ok: false, error: query.error });
        }
    }

    async login(req, res) {
        const body = req.body;
        const query = await UserQueries.findUser({
            username: body.username,
            password: body.password,
        });

        try {
            const result = query
            //cimparo la contraseña, si es correcta devuelvo status 200 y si no es correcta, devuelvo 401
                ? (pkg.compareSync(body.password, query.data.password)
                    ? res.status(200).send({ ok: true, id: query.data.id, token: userController.payload.createToken(query.data) })
                    : res.status(401).send({ ok: false, message: 'Incorrect password' })
                )
                //si el usuario no existe, devuelvo 404
                : res.status(404).json({ ok: false, message: 'User not found' });

            return result;

        } catch (error) {
            return res.status(500).json({ ok: false, message: 'Internal server error', error: error });
        }
    }


    async updateUser(req, res) {
        const body = req.body;
        const query = await UserQueries.updateUser(body);
        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(500).json({ ok: false, data: null });
        }
    }

    async findUserById(req, res) {
        const id = req.params.id;
        const query = await UserQueries.findUserById(id);
        if (query.ok) {
            return res.status(200).json({ ok: true, data: query.data });
        } else {
            return res.status(500).json({ ok: false, data: null });
        }
    }



}

export const UsersController = new userController();