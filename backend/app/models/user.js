import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({
  name: {
    type: String,
    unique: true
  },
  password: String,
  admin: Boolean
}));