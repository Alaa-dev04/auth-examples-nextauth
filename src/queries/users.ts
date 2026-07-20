// this is where I talk to my database
import { User } from "../models/user";
export interface UserType {
    name:string,
    email:string,
    password:string,
}
export async function createUser(user : UserType) {
    try {
        await User.create(user);
    } catch (e) {
        if (e instanceof Error) throw e;
        throw new Error(String(e));
    }
}