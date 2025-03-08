// require('dotenv').config({path: './env'})
import dotenv from 'dotenv';
import dbConnect from "./db/index.js";
import express from 'express'
const app = express();

dotenv.config({
    path:'./.env'
})

dbConnect()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`App listening on this port ${process.env.PORT}`)
    }
    )
})
.catch((error)=>{
    console.log(`Database connection failed!!!: ${error}`);
})








 












// const app = express();
// (async()=>{
//     try {

//        await mongoose.connect(`${process.env.MONGO_DB_URL}/${DB_NAME}`)
//        app.on('error',(error)=>{
//         console.log("Error is detected:" , error);
//         throw error
//        })

//        app.listen(process.env.PORT,()=>{
//         console.log(`App listening on this port: ${process.env.PORT}`);
//        })
        
//     } catch (error) {
//         console.log(error)
//         throw error;
//     }
// })()