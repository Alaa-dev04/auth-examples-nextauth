
import mongoose, { Schema } from "mongoose";
interface UserType {
    name:string,
    email:string,
    password:string,
}
const userSchema = new Schema<UserType> ({
    name:{
        required:true,
        type: String,
    },
    password:{
        required:true,
        type: String,
    },
    email:{
        required:true,
        type: String,
    },
});
export const User = mongoose.models.User ?? mongoose.model("User",userSchema);