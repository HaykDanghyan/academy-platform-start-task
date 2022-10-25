const router = require('express').Router()
let photo = require('../modules/photo-module')

// for receiving data
router.route('/').get((req, res) => {
    photo.find()
    .then(photos => res.json(photos))
    .catch(err => res.status(400).json('ERROR' + err))
})

// for adding data
router.route('/add').post((req, res) => {
    const albumId = req.body.albumId
    const title = req.body.title
    const url = req.body.url
    const thumbnailUrl = req.body.thumbnailUrl
    const newPhoto = new photo({albumId, title, url, thumbnailUrl})
    newPhoto.save()
    .then(() => res.json('Photo added successfully'))
    .catch(err => res.status(400).json('ERROR' + err))
})

// for updating data
router.route('/update/:id').post((req, res) => {
    photo.findById(req.params.id)
    .then(Photo => {
        Photo.albumId = req.body.albumId
        Photo.title = req.body.title
        Photo.url = req.body.url
        Photo.thumbnailUrl = req.body.thumbnailUrl
        Photo.save()
        .then(() => res.json('Photo updated successfully'))
        .catch(err => res.status(400).json('ERROR' + err))
    })
    .catch(err => res.status(400).json('ERROR' + err))
})

// for deleting data
router.route('/:id').delete((req, res) => {
    photo.findByIdAndDelete(req.params.id)
    .then(() => res.json('Photo deleted successfully'))
    .catch(err => res.status(400).json('ERROR' + err))
})

module.exports = router