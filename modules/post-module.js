const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postScheme = new Schema({
    userId: {type: Number, required: true},
    title: {type: String, required: true},
    body: {type: String, required: true}
}, {
    timestamps: false
}) 

const Post = mongoose.model('Post', postScheme)
module.exports = Post