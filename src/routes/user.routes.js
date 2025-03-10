import express from "express";
import { logOutUser, registerUser } from "../controllers/user.controller.js";
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
export default router;
