// require('dotenv').config({path: './env'})
import dotenv from 'dotenv';
import dbConnect from "./db/index.js";

dotenv.config({
    path:'./.env'
})

dbConnect();






 












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