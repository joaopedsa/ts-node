import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { url } from './utils/config';
import Routes from './routes';

class App {
    public express: express.Application;
    constructor() {
        this.express = express();
        this.middleware();
        this.database();
        this.routes();
    }

    private middleware(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private database(): void {
        mongoose.connect(url || '', {
            useNewUrlParser: true
        }
        ).then(() => console.log('Conectou no banco')
        ).catch((err: any) => console.error(err));
    }

    private routes(): void {
        this.express.use(new Routes().routes);
    }
}

export default new App().express
