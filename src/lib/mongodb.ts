//////db connection 
import dns from "node:dns";
import mongoose from "mongoose";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const MONGO_db = process.env.MONGO_URL;
export async function dbconnect(){
    try{
        let conn = await mongoose.connect(String(MONGO_db));
        return conn;
    
    } catch (e ) {
        if (e instanceof Error) throw e;
        throw new Error(String(e));
    }
}; 