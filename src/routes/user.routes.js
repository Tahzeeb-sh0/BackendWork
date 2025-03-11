import express from "express";
import { logOutUser, registerUser,refreshAccessToken } from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
import { loginUser } from "../controllers/user.controller.js";
import {verifyjwt} from '../middleware/auth.middleware.js'

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

router.route("/login").post(loginUser)
router.route("/logout").post(verifyjwt, logOutUser)
router.route("/refresh-token").post(refreshAccessToken)
export default router;
