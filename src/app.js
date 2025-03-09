import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { LIMIT } from "./constants.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORES_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: LIMIT }));
app.use(express.urlencoded({ extended: true, limit: LIMIT }));
app.use(express.static("public"));
app.use(cookieParser());

//Router

import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users", userRouter);

export { app };
