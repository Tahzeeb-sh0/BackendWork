import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import dotenv from 'dotenv';
import jwt from "jsonwebtoken"

(dotenv.config({ path: "./.env" }))

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      index: true,
      trim: true,
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
      ref: "Video",
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};


userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
    _id: this._id,
    email: this.email,
    username: this.username,
    fullName: this.fullName,
  },
  process.env.ACCESS_TOKEN_SECERET,
   {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
   }
)};

userSchema.methods.generateRefreshToken = function () {
  return  jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECERET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
