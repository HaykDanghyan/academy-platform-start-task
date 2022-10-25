const mongoose = require('mongoose')
const Schema = mongoose.Schema

const albumScheme = new Schema({
    userId: {type: Number, required: true},
    title: {type: String, required: true}
}, {
    timestamps: false
})

const Album = mongoose.model('Album', albumScheme)
module.exports = Album