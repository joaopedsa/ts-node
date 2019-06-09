import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { url } from './utils/config';
import Routes from './routes';
class App {
    constructor() {
        this.express = express();
        this.middleware();
        this.database();
        this.routes();
    }
    middleware() {
        this.express.use(express.json());
        this.express.use(cors());
    }
    database() {
        mongoose.connect(url, {
            useNewUrlParser: true
        }).then(() => console.log('Conectou no banco')).catch(err => console.error(err));
    }
    routes() {
        this.express.use(new Routes().routes);
    }
}
export default new App().express;
