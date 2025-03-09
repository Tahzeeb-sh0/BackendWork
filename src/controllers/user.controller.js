import { asyncHandler } from '../utils/asyncHandler.js'
import {ApiError} from '../utils/apiError.js'
import {User} from '../models/user.model.js'

const registerUser = asyncHandler(async (req, res) => {

    res.status(200).json({
        message: 'ok'
    });
    const { fullName, email, username, password } = req.body;

    if (
        [fullName, email, username, password].some((fields) => fields.trim() == "")
    ) {
        throw new ApiError(400,"All fields are required")

    }

   const existedUser = User.findOne(
        {
            $or:[{ username }, { email }]
        }
    )

    if (existedUser) {
        throw new ApiError(409,"User with name or email already exists")
    }

   const avatarLocalPath = req.files?.avatar[0]?.path
   const coverImageLocalPath = req.files?.coverImage[0]?.path

   if(!avatarLocalPath){

    throw new ApiError(400,"Avatar file is required")

   }


})

export { registerUser };