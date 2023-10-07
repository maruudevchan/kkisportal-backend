import {UserQueries} from '../sql/users.queries.js';
import {request, response} from 'express';
import {Payload} from '../helpers/payload.js';

import pkg from 'bcrypt';
const {bcrypt} = pkg;
const saltRounds = 10;

class userController{
    static payload = new Payload();

    async createUser(request, response){
        const user = request.body;
        //encrypt password
        const salt = pkg.genSaltSync(saltRounds);
        const password = pkg.hashSync(user.password, salt);
        user.password = password;        
        const query = await UserQueries.store(user);
        if (query.ok){
            return response.status(200).json({ok: true, data: query.data});
        }else{
            console.log(query.error);
             return response.status(500).json({ok: false, error: query.error});
        }
    }

    async login(req, res){
        const body = req.body;
        const query = await UserQueries.findUser({
            username: body.username,
            password: body.password,
        });

        if (query){
            
            const match = pkg.compareSync(body.password, query.data.password);
            if (match==true){
                try {
                    const token = userController.payload.createToken(query.data);
                    
                    return res.status(200).send({ok: true, id: query.data.id , token: token});
                } catch (error) {
                    return res.status(403).send({
                        ok: false,
                        message:'error on token creation',
                        error: error
                    });
                }
            }else{
                return res.status(403).send({
                    ok: false,
                    message:'Incorrect password'
                });
            }

        }else{
            return res.status(404).json({ok: false, data: null});
        }

    }

    async updateUser(req, res){
        const body = req.body;
        const query = await UserQueries.updateUser(body);
        if (query.ok){
            return res.status(200).json({ok: true, data: query.data});
        }else{
            return res.status(500).json({ok: false, data: null});
        }    
    }

    async findUserById(req, res){
        const id = req.params.id;
        const query = await UserQueries.findUserById(id);
        if (query.ok){
            return res.status(200).json({ok: true, data: query.data});
        }else{
            return res.status(500).json({ok: false, data: null});
        }
    }
    


}

export const UsersController = new userController();