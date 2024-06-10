const UserService = require('../services/UserService')
const getAllUser = async (req, res, next) => {
    console.log("User Controller: get All User");
    const User = await UserService.getAllUser();
    req.responseData = { // Corrected property name from 'responeData' to 'responseData'
        status: 200,
        message: 'Success',
        data: User
    };
    next();
};
const createUser = async (req,res ,next)=>{
    console.log("User Controller: create User")

    const User = await UserService.createUser(req.body)
    req.responseData = {
        status: 201, // Status mặc định là 201
        message: 'Success', // Message mặc định là 'Success'
        data: User // Dữ liệu trả về từ controller
    };
    next();
}
const getUserbyId = async (req,res ,next)=>{

}
const updateUser = async (req,res ,next)=>{

}
const deleteUser = async (req,res ,next)=>{

}
module.exports = {
    getAllUser,
    getUserbyId,
    updateUser,
    deleteUser,
    createUser
}