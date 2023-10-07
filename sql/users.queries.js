import { query } from "express";
import { Op } from "sequelize";
import { UserModel } from "../models/users.js";

class userQueries{
    
    async store(user){
        try{
            const query = await UserModel.create(user);
            if (query){
                return {ok:true, data:query};
            }
        }catch (error) {
            console.log('error al ejecutar query', error);
            return {ok:false, data:query.data};
        }
    }


    async findUser(user){
        try{
            const query = await UserModel.findOne({where:{username:user.username}});
            
            if (query){
                return {ok:true, data:query};
            }
        }catch (error) {
            console.log('error al ejecutar query', error);
            return {ok:false, data:query.data};
        }

    }


    async findUserById(idUser){
        try
        {
            const query = await UserModel.findOne({where:{idUser:idUser}});
            if (query){
                return {ok:true, data:query};
            }
        }catch (error) {
            console.log('error al ejecutar query', error);
            return {ok:false, data:query.data};
        }
    }


}

export const UserQueries = new userQueries();