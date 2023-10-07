import { query } from "express";
import { Op } from "sequelize";
import { UsersModel } from "../models/users.js";

class userQueries {

    async store(user) {
        try {
            const query = await UsersModel.create(user);
            if (query) {
                return { ok: true, data: query };
            }
        } catch (error) {
            console.log('error al ejecutar query', error);
            return { ok: false, data: query.data };
        }
    }


    async findUser(user) {
        try {
            const query = await UsersModel.findOne({ where: { username: user.username } });

            // if (query){
            //     if (query.isActive==false){
            //         return {ok:false, data:null};
            //     }
            //     return {ok:true, data:query};
            // }
            // Checamos si el usuario está activo en el sistema y retornamos el resultado
            const result = query.isActive ? { ok: true, data: query } : { ok: false, data: null };
            return result;

        } catch (error) {
            console.log('error al ejecutar query', error);
            return { ok: false, data: query.data };
        }

    }


    async findUserById(id) {
        try {
            const query = await UsersModel.findOne({ where: { id: id } });
            if (query) {
                return { ok: true, data: query };
            }
        } catch (error) {
            console.log('error al ejecutar query', error);
            return { ok: false, data: query.data };
        }
    }


}

export const UserQueries = new userQueries();