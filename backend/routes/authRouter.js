import express from "express";
import { signUp, logIn, logout } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/signup", signUp);
authRouter.post("/login", logIn);
authRouter.get("/logout", logout);

export default authRouter;
