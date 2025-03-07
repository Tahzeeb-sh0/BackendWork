import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import express from 'express'
import dotenv from 'dotenv'
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

app.get('/',(req,res)=>[
    res.send("<h1>Database connected!</h1>")
])

app.listen(process.env.PORT,()=>{
    console.log(`App listening on this port: `)
})


export default dbConnect;