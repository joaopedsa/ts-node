"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./utils/config");
const routes_1 = __importDefault(require("./routes"));
class App {
    constructor() {
        this.express = express_1.default();
        this.middleware();
        this.database();
        this.routes();
    }
    middleware() {
        this.express.use(express_1.default.json());
        this.express.use(cors_1.default());
    }
    database() {
        mongoose_1.default.connect(config_1.url || '', {
            useNewUrlParser: true
        }).then(() => console.log('Conectou no banco')).catch((err) => console.error(err));
    }
    routes() {
        this.express.use(new routes_1.default().routes);
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map