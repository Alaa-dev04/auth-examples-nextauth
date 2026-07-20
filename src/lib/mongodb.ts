//////db connection 

import mongoose from "mongoose";

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