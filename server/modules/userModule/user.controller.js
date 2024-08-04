import userModel from "../../database/models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

const signUp = async (req, res) => {
  let user = await userModel.create(req.body);

  let token = jwt.sign({ id: user._id }, "mySecretToken");

  res.json({ message: "user added successfully", token });
};

const signIn = async (req, res) => {
  let { email, password } = req.body;

  let isExist = await userModel.findOne({email})
  

  if (isExist && bcrypt.compareSync(password, isExist.password)) {
    let token = jwt.sign({ id: isExist._id }, "mySecretToken");

    res.json({ message: "welcome", token });
  } else {
    res.status(400).json({ message: "error"});
  }
};

export default {
  signIn,
  signUp,
};
