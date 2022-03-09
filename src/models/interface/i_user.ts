import { ObjectId, Document } from 'mongoose';

export interface IUser extends Document {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    mobile?: string,
    dob?: Date,
    gender: String,
    parent_id?: ObjectId,
    department: ObjectId
    role: ObjectId
}