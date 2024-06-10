const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const clientSchema = new mongoose.Schema({
 
    ClientName: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    },
}, { timestamps: true });

// Thêm plugin mongoose-delete
clientSchema.plugin(mongooseDelete, { overrideMethods: 'all' });

module.exports = mongoose.model('Client', clientSchema);
