const mongoose = require("mongoose");
//same as: const Schema = mongoose.Schema;

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);
