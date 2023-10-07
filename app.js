import express from 'express';
import { Routes } from './routes/routes.js';

const app = express();
const routes = new Routes();
routes.initRoutes(app);

const port = process.env.APP_PORT || 3000;
app.listen(port, () => console.log(`API is running, port: ${port}`));
