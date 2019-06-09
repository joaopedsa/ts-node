import { Schema, model } from 'mongoose';
const UserSchema = new Schema({
    email: String,
    name: String,
    lastName: String,
}, {
    timestamps: true
});
export default model('user', UserSchema);
