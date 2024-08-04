import { Router } from "express";
import workoutController from "./workout.controller.js";

const workoutRouter = Router();

workoutRouter.post("/addWorkout", workoutController.addWorkout);
workoutRouter.get("/", workoutController.getAllWorkout);
workoutRouter.get("/:id",workoutController.getWorkout);
workoutRouter.patch("/:id",workoutController.updatetWorkout);
workoutRouter.delete("/:id",workoutController.deleteWorkout);

export default workoutRouter;
