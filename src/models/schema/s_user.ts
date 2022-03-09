import {Schema, model} from 'mongoose';

export const UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true, nullable: false},
    mobile: { type: String, default: null},
    dob: { type: Date, default: null},
    gender: { type: String, default: null},
    parent: { type: Schema.Types.ObjectId, ref: "User"},
    department: { type: Schema.Types.ObjectId, ref: "Department"},
    role: { type: Schema.Types.ObjectId, ref: "Role"},
    thumbnail:  { type: Schema.Types.ObjectId, ref: "Image"},
});