import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from 'express'

const app = express();

const dbConnect = async ()=>{
    try {

        const connectionInstance = await mongoose.connect(
            `${process.env.MONGO_DB_RUI}/${DB_NAME}` );
            console.log("SuccessFully connected")

        app.on('error',(error)=>{
            console.log(`ERROR: ${error}`);
            process.exit(1);
           
        })

        
    } catch (error) {
        console.log(`SuccessFully connection failed: ${error}`);
        throw error;
        
    }
}
export default dbConnect;