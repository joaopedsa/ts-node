"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("./controllers/userController"));
class Routes {
    constructor() {
        this.routes = express_1.Router();
        this.userRouters();
    }
    userRouters() {
        this.routes.get('/user', userController_1.default.index);
        this.routes.get('/test', userController_1.default.test);
    }
}
exports.default = Routes;
//# sourceMappingURL=routes.js.map