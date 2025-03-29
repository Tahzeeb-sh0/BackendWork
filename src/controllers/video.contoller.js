import mongoose, {isValidObjectId} from "mongoose";
import {Video} from "../models/video.mode.js";
import {User} from "../models/user.model.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";


const getAllVideos = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, query, sortBy, sortType, userId } = req.query;
})

const publishAVideo = asyncHandler(async (req, res) => {
    const { title, description,} = req.body
   
    if ([title,description].some((fields)=> fields.trim() == "")) {
        throw new ApiError(400,"All field are required")
    }
    const thumbnailLocalFilePath = req.files?.thumbnail[0]?.path;
    const videoLocalFilePath = req.files?.videoFile[0]?.path;

    if ([thumbnailLocalFilePath,videoLocalFilePath].some((field)=>field.trim()=="")) {
        throw new ApiError(400,"All field are required")
    }

    const video = await uploadOnCloudinary(videoLocalFilePath);
    const thumbnail = await uploadOnCloudinary(thumbnailLocalFilePath);

    if (!video && !thumbnail) {
        throw new ApiError(400,"Video and thumbnail file are required")
    }

  const user =  await Video.create({
    title,
    description,
    videoFile:video,
    thumbnail:thumbnail,
    })
    
    if (!user) {
        throw new ApiError(401,"Failed to upload videoFile")
    }


    return res
    .status(201)
    .json(new ApiResponse(201,user,"Video uploaded successfully"));
  
})

const getVideoById = asyncHandler(async (req, res) => {
    const { videoId } = req.params
  

    if (!videoId) {
        throw new ApiError(404,"Video is not present")
    }

    
})

const updateVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params
  

})

const deleteVideo = asyncHandler(async (req, res) => {
    const { videoId } = req.params

})

const togglePublishStatus = asyncHandler(async (req, res) => {
    const { videoId } = req.params
})

export {
    getAllVideos,
    publishAVideo,
    getVideoById,
    updateVideo,
    deleteVideo,
    togglePublishStatus
}