const mongoose = require('mongoose')
const Schema = mongoose.Schema

const photoScheme = new Schema({
    albumId: {type: Number, required: true},
    title: {type: String, required: true},
    url: {type: String, required: true},
    thumbnailUrl: {type: String, required: true}
}, {
    timestamps: false
})

const Photo = mongoose.model('Photo', photoScheme)
module.exports = Photo