import { Router } from 'express';
import userController from './controllers/userController';
class Routes {
    constructor() {
        this.routes = Router();
        this.userRouters();
    }
    userRouters() {
        this.routes.get('/user', userController.index);
        this.routes.get('/test', userController.test);
    }
}
export default Routes;
