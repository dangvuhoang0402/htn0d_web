const CustomError = require("../error/CustomError");
const UserRepo = require("../repo/UserRepo");
const User = require("../models/User");
var bcrypt = require("bcrypt");

require("express-async-errors");

const getAllUser = async() => {
  console.log("User Service: get All User ");
  const Users = await UserRepo.getAllUser();
  return Users

};
const createUser = async(UserData) => {
  console.log("User service: create User")
  UserData.Password = await bcrypt.hash(UserData.Password, 10);

  const task = await UserRepo.createUser(UserData);
  return task
};
const getUserbyId = async() => {};
const updateUser = async() => {};
const deleteUser = async() => {};
module.exports = {
  getAllUser,
  getUserbyId,
  updateUser,
  deleteUser,
  createUser
};
