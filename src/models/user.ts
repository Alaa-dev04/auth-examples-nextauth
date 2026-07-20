
import mongoose, { Schema } from "mongoose";
interface UserType {
    name:string,
    email:string,
    password:string,
}
const userSchema = new Schema<UserType> ({
    name:{
        require:true,
        type: String,
    },
    password:{
        require:true,
        type: String,
    },
    email:{
        require:true,
        type: String,
    },
});
export const User = mongoose.models.User ?? mongoose.model("User",userSchema);