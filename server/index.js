import express from "express";
import workoutRouter from "./modules/workoutModule/workout.routes.js";
import connectDB from "./database/connection.js";
import cors from "cors";
import userRouter from "./modules/userModule/user.routes.js";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
connectDB;

app.use("/api/workout", workoutRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
