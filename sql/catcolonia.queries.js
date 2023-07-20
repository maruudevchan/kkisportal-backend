import { query } from "express";
import { Op } from "sequelize";
import { CatColoniaModel } from "../models/catcolonia.model";

class CatColoniaQueries{

    async storeCatColonia(colonia){
        //meto el objeto en la base de datos
        try{
            const query = await CatColoniaModel.create(colonia);
            if (query){
                return {ok: true, data: query};
            }
            //si no se pudo guardar, muestro error
        } catch(error){
            console.log('error al ejecutar la consulta: ', error);
            return {ok: false, data: error};
        }

    }

    async getAllCatColonias(){
            
            //hago la consulta
            try{
                const query = await CatColoniaModel.findAll();
                if (query){
                    return {ok: true, data: query};
                }
                //si no se pudo encontrar, muestro error
            } catch(error){
                console.log('error al ejecutar la consulta: ', error);
                return {ok: false, data: error};
            }
        }

    async getCatColoniaById(id){
        try{
            const query = await CatColoniaModel.findOne({
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

}