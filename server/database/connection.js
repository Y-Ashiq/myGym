import mongoose from "mongoose";

const connectDB = mongoose
  .connect(
    " " //replace with database uri
  )
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

export default connectDB;
