import { Router } from "express";
import { UserController } from "./user.controller";

const userRouter = Router();

userRouter.post("/register", UserController.registerUser);
userRouter.post("/login", UserController.loginUser);

export default userRouter;
