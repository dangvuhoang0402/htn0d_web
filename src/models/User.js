const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({   
    UserName: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Token: {
        type: String
    }
});
module.exports = mongoose.model('User', UserSchema);
