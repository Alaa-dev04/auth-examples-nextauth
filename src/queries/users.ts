// this is where I talk to my database
import { User } from "../models/user";
export interface UserType {
    name:string,
    email:string,
    password:string,
}
export async function createUser(user : UserType) {
    try {
        const newUser = await User.create(user);
        console.log("Created user:", newUser);
    } catch (e) {
        if (e instanceof Error) throw e;
        throw new Error(String(e));
    }
}