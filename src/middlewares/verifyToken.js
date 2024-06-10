// require("dotenv").config();
// const jwt = require('jsonwebtoken');

// const verifyToken = async (req, res, next) => {
//   console.log("verifyToken")
//   console.log("add payload to req.user")

//   next()
// }
var dotenv = require('dotenv');
var env = process.env.NODE_ENV;
dotenv.config({ path: `.env.${env}` });

const jwt = require('jsonwebtoken');

const verifyToken =async (req, res, next) => {
    const authHeader = req.headers.authorization
  
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('No token provided')
    }
    const token = authHeader.split(' ')[1]
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
      console.log(decoded)

      const { id, username, role } = decoded
      req.user = { id, username ,role}
      next()
    } catch (error) {
        const newE = new Error('Not authorized to access this route')
        newE.status =401
        next(newE)
    }
}
module.exports = verifyToken