//(Entities) Represents the structure of the user data in our database, we are going to use mongoose to create a schema for our user model
import mongoose, { Schema } from "mongoose";

//the interface is the representation of our user data in our code, like a DTO:
export interface IUser {
    handle: string;
    name: string;
    email: string;
    password: string;
}

//The schema is the representation of our collection or table in our database:
const userSchema = new Schema({
    handle: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
})

//Now we are going to allow the use of schema from anywhere of our code or project
// <User> is the name of our interface.
const User = mongoose.model<IUser>('User', userSchema);
export default User;