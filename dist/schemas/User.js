"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    email: String,
    name: String,
    lastName: String,
}, {
    timestamps: true
});
exports.default = mongoose_1.model('user', UserSchema);
//# sourceMappingURL=User.js.map