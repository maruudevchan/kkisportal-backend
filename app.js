import { application } from 'express';
import App from './config/config.conf.js';

const port = process.env.APP_PORT || 3000;
App.http.listen(port, ()=>console.log(`API is running, port: ${port}`));
