import { Schema, model } from 'mongoose';
import { UserInterface } from './UserInterface';

const UserSchema = new Schema({
    email: String,
    name: String,
    lastName: String,
}, {
    timestamps : true
})

export default model<UserInterface>('user',UserSchema)
