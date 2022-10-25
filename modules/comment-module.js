const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentScheme = new Schema({
    postId: {type: Number, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    body: {type: String, required: true},
},{
    timestamps: false
})

const Comment = mongoose.model('Comment', commentScheme)
module.exports = Comment