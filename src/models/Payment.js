const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
 
    ClientCard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card',
    },
    MerchantCard:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card',
    },
    Date: {
        type: Date,
        default: Date.now,
    },
    Status: {
        type: String,
        enum: ['Success', 'Failed'],
    },
    Amount:{
        type: Number,
        required: true,
    },
    Reason:{
        type: String,
        default: 'No Reason',
    }
});

module.exports = mongoose.model('Payment', PaymentSchema);
