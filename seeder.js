// seed.js
const mongoose = require('mongoose');
var bcrypt = require("bcrypt");

const User = require('./src/models/User');
const url = "mongodb+srv://dangvuhoang0402:WVioKGW7KkmG8PER@cluster0.9zuu4ha.mongodb.net/htn0d_proj_db"
// const connectMongoDB = (connectString)=>{
//     return mongoose.connect(connectString,{
        
//     }).then(console.log("Connected to DB"))
// }
mongoose.connect(url)
    .then(() => {
        console.log('Connected to MongoDB');
        seedUsers();
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB', error);
    });

async function seedUsers() {
    try {
        await User.deleteMany(); 
        const password = await bcrypt.hash("123456", 10);

        const users = [
            { UserName: 'admin1', Password: password },
            { UserName: 'admin2', Password: password },
        ];

        await User.insertMany(users); 
        console.log('Users seeded successfully');
        mongoose.connection.close(); 
    } catch (error) {
        console.error('Error seeding users', error);
        mongoose.connection.close(); 
    }
}
