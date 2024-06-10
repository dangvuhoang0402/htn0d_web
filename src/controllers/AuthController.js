const authService = require("../services/AuthService")
const login =async (req,res,next)=>{
    console.log("AuthController: login");
    console.log("req.body:", req.body);
    const result = await authService.login(req.body)
    req.responseData = {
        status: 200, 
        data: result 
    };
    next();


}
module.exports = {
    login
}