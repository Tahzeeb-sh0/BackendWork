import mongoose, { Schema } from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique:true,
      lowercase:true,
      index:true,
      trim:true
    },
    email: {
        type: String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true
      },
      fullName: {
        type: String,
        required: true,
        index:true,
        trim:true
      },
      avatar: {
        type: String,
        required: true,
      },
      coverImage: {
        type: String,
      },
      watchHistory: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Video'
      },
      password:{
        type:String,
        required:[true,'Password is required']
      },
      refreshToken:{
        type:String,
      }
  },
  { timeseries: true }
);

export const User = mongoose.model("User", userSchema);
