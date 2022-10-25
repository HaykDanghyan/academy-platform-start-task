const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoScheme = new Schema({
    userId: {type: Number, required: true},
    title: {type: String, required: true},
    completed: {type: Boolean, required: true}
}, {
    timestamps: false
})

const Todo = mongoose.model('Todo', todoScheme)
module.exports = Todo