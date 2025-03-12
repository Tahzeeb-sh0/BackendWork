import express from "express";
import {
  logOutUser,
  registerUser,
  refreshAccessToken,
  changeCurrentUserPassword,
  getCurrentUser,
  updateUserdetails,
  updateUserCoverImage,
  getUserChannelProfile,
  getUserWatchHisteory,
} from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { loginUser } from "../controllers/user.controller.js";
import { verifyjwt } from "../middleware/auth.middleware.js";
import { get } from "mongoose";

const router = express.Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router
 .route("/login")
 .post(loginUser);

router
 .route("/logout")
 .post(verifyjwt, logOutUser);

router
 .route("/refresh-token")
 .post(refreshAccessToken);

router
 .route("/change-password")
 .post(verifyjwt, changeCurrentUserPassword);

router
 .route("/getCurrengUser-details")
 .get(verifyjwt, getCurrentUser);

router
 .route("/updateUser-details")
 .patch(verifyjwt, updateUserdetails);

router
  .route("/avatar")
  .patch(verifyjwt, upload.single("avatar"), updateUserdetails);

router
  .route("/coverImage")
  .patch(verifyjwt, upload.single("coverImage"), updateUserCoverImage);

router
 .route("/c/:username")
.get(verifyjwt, getUserChannelProfile);
 
router
.route("/history")
.get(verifyjwt, getUserWatchHisteory);

export default router;
