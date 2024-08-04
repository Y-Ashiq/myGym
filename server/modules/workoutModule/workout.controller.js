import workoutModel from "../../database/models/workout.model.js";
import { ObjectId } from "mongodb";

const addWorkout = async (req, res) => {
  try {
    const workout = await workoutModel.create(req.body);
    res.status(200).json({ meassege: "workout added", workout });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getAllWorkout = async (req, res) => {
  try {
    const workout = await workoutModel.find({});
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json(error);
  }
};
const getWorkout = async (req, res) => {
  const { id } = req.params;
  const workout = await workoutModel.findById({ _id: new ObjectId(`${id}`) });

  if (!workout) {
    res.status(400).json({ message: "workout not found" });
  } else {
    res.status(200).json(workout);
  }
};
const updatetWorkout = async (req, res) => {
  const { id } = req.params;

  const workout = await workoutModel.findOneAndUpdate(
    { _id: ObjectId(`${id}`) },
    { ...req.body }
  );

  if (!workout) {
    res.json({ message: "workout not found" });
  } else {
    res.json(workout);
  }
};
const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  const workout = await workoutModel.findOneAndDelete({
    _id: new ObjectId(`${id}`),
  });

  if (!workout) {
    res.json({ message: "workout not found" });
  } else {
    res.json({ message: "workout deleted", workout });
  }
};

export default {
  addWorkout,
  getAllWorkout,
  getWorkout,
  updatetWorkout,
  deleteWorkout,
};
