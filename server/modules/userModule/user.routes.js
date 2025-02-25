import { Router } from "express";

import userControllers from "./user.controller.js";
import { checkUser } from "../../middleware/checkUser.js";

const userRouter = Router();

userRouter.post("/signUp",checkUser, userControllers.signUp);

userRouter.post("/signIn", userControllers.signIn);

export default userRouter