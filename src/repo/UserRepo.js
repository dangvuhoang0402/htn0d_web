const User = require("../models/User");
require("express-async-errors");
var bcrypt = require("bcrypt");

const createUser = async (UserData) => {
  const task = await User.create(UserData);
  return task;
};
const getAllUser = async () => {
  console.log("User Repo: get ALl User");
  const users = await User.find();
  return users;
};

const login = async (UserName, Password) => {
  console.log("User Repo: login");
  console.log("UserName:", UserName);
  console.log("Password:", Password.toString());
  const userDoc = await User.findOne({UserName });
  console.log("user doc:", userDoc); 
  if (!userDoc) {
    return null;
  }
  console.log(userDoc.Password.toString());

  const isPasswordCorrect = await bcrypt.compare(Password.toString(), userDoc.Password.toString());

  if (!isPasswordCorrect) {
    return null;
  }

  return userDoc;
};
const getUserById = async (id) => {
  console.log("User Repo: get User by Id");
};
const updateUser = async (id) => {
  console.log("User Repo: update ALl User");
};
const deleteUser = async (id) => {
  console.log("User Repo: delete ALl User");
};
module.exports = {
  getAllUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  login
};
