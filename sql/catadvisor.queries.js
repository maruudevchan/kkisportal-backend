import { query } from "express";
import { Op } from "sequelize";
import { CatAdvisorModel } from "../models/catadvisor.model";

class CatAdvisorQueries{
    //para almacenar

    async storeCatAdvisor(advisor){
        try{
            //meto el objeto en la base de datos
            const query = await CatAdvisorModel.create(advisor);
            if (query){
                return {ok: true, data: query};
            }
            //si no se pudo guardar, muestro error
        } catch(error){
            console.log('error al ejecutar la consulta: ', error);
            return {ok: false, data: error};
        }

    }

    //para obtener todos los registros
    async getAllCatAdvisors(){

        //hago la consulta
        try{
            const query = await CatAdvisorModel.findAll();
            if (query){
                return {ok: true, data: query};
            }
            //si no se pudo encontrar, muestro error
        } catch(error){
            console.log('error al ejecutar la consulta: ', error);
            return {ok: false, data: error};
        }
    }

    //para obtener un registro por id
    async getCatAdvisorById(id){
        try{
            const query = await CatAdvisorModel.findOne({
                where: {
                    id: id
                }
            });
            if (query){
                return {ok: true, data: query};
            }
            //si no se pudo encontrar, muestro error
        } catch(error){
            console.log('error al ejecutar la consulta: ', error);
            return {ok: false, data: error};
        }
    }

    //para actualizar un registro por id
    updateCatAdvisorById(id, advisor){
        try{
            const query = CatAdvisorModel.update(advisor, {
                where: {
                    id: id
                }
            });
            if (query){
                return {ok: true, data: query};
            }
            //si no se pudo actualizar, muestro error
        } catch(error){
            console.log('error al ejecutar la consulta: ', error);
            return {ok: false, data: error};
        }
    }

}