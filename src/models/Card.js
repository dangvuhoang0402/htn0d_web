const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const { v4: uuidv4 } = require('uuid');

const CardSchema = new mongoose.Schema({
  Client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
  Lock: {
    type: Boolean,
    default: false
  },
  Balance: {
    type: Number,
    default: 0
  },
  CardUid: {
    type: String,
    default: uuidv4, // generate a unique ID for each card
  },
}, { timestamps: true });

// Add soft delete plugin
  CardSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all'
});

module.exports = mongoose.model('Card', CardSchema);;

