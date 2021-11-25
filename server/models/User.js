// importing schema and model from pacage mongoose
const { Schema, model, ObjectId } = require("mongoose")

// making schema inside of we have info

const User = new Schema({
  email: {type: String, require: true, unique: true },
  password: {type: String, require: true},
  diskSpace: {type: Number, default: 1024 ** 3 * 10},
  usedSpace: {type: Number, default: 0},

  // conecting users and fails
  avatar: {type: String},
  files: [{type: ObjectId, ref: "File"}],
})


module.exports = module('User', User);
