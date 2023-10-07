import jwt from 'jsonwebtoken';
import fs from 'fs';
import dotenv from 'dotenv';
import { pathToFileURL } from 'url';
dotenv.config();


export class Payload{
        createToken(data){
        let private_key = null;

        if(process.env.MODE!='dev'){
            console.log('PROD ENVIRONMENT');
             private_key = fs.readFileSync('process.env.PRIVATE_KEY', 'utf8');

        }else{
            console.log('DEV ENVIRONMENT');
            private_key = fs.readFileSync(pathToFileURL('..\\backend\\keys\\clave_privada.pem'), 'utf-8');
        }

        const u_id = data.idUser;
        const username = data.username;
       //el payload
        return jwt.sign({
            user_id: u_id,
            username: username,
        },private_key,{algorithm: 'RS256', expiresIn: '2m'});
    
    }

}