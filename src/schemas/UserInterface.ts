import { Document } from 'mongoose';

export interface UserInterface extends Document {
    email?: String
    name?: String
    lastName?: String
}
