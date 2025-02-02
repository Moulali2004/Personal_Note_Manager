const mongoose = require('mongoose');
const schema = mongoose.schema;

const userSchema = new mongoose.Schema({
    fullName: { type: String},
    email: { type: String, unique: true },
    password: { type: String },
    createdOn: { type: Date, default: new Date().getTime() },
})

module.exports = mongoose.model("User", userSchema);