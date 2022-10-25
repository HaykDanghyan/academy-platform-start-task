const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userScheme = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
}, {
    timestamps: false
})

const User = mongoose.model('User', userScheme)
module.exports = User