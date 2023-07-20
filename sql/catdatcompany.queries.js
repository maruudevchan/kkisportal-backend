import { query } from "express";
import { Op } from "sequelize";
import { CatDatCompanyModel } from "../models/catdatcompany.model";

class CatDatCompanyQueries{

    async storeCatDatCompany(datcompany){
        try{
            const query = await CatDatCompanyModel.create(datcompany);
            if (query){
                return {ok: true, data: query};
            }
        } catch(error){
            console.log('error al ejecutar la consulta: ', error);
            return {ok: false, data: error};
        }

    }

    async getAllCatDatCompanies(){
            
            try{
                const query = await CatDatCompanyModel.findAll();
                if (query){
                    return {ok: true, data: query};
                }
            } catch(error){
                console.log('error al ejecutar la consulta: ', error);
                return {ok: false, data: error};
            }
        }

    async getCatDatCompanyById(id){
        try{
            const query = await CatDatCompanyModel.findOne({
                where: {
                    id: id
                }
            });
            if (query){
                return {ok: true, data: query};
            }
        }
        catch(error){
            console.log('error al ejecutar la consulta: ', error);
            return {ok: false, data: error};
        }
    }
}