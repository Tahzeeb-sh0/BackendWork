


const asyncHandler = (responseHandeler)=>{
    (req,res,nex)=>{
    Promise.resolve(responseHandeler(req , res , next)).catch((error) => next(error))
    }
}



// const asyncHandler =  (fun) => async (req , res , next)=>{

//     try {

//         await fun(req, res, next)
        
//     } catch (error) {
//         res.status(err.code || 500).json({

//             success:false,
//             message:err.message

//         })
//     }

// }