const router = require('express').Router()
let album = require('../modules/album-module')

// for receiving data
router.route('/').get((req, res) => {
    album.find()
    .then(albums => res.json(albums))
    .catch(err => res.status(400).json('ERROR' + err))
})

// for adding data
router.route('/add').post((req, res) => {
    const userId = req.body.userId
    const title = req.body.title
    const newAlbum = new album({userId, title})
    newAlbum.save()
    .then(() => res.json('Album added successfully'))
    .catch(err => res.status(400).json('ERROR' + err))
})

// for updating data
router.route('/update/:id').post((req, res) => {
    album.findById(req.params.id)
    .then(Album => {
        Album.userId = req.body.userId
        Album.title = req.body.title
        Album.save()
        .then(() => res.json('Album updated successfully'))
        .catch(err => res.status(400).json('ERROR' + err))
    })
    .catch(err => res.status(400).json('ERROR' + err))
})

// for deleting data
router.route('/:id').delete((req, res) => {
    album.findByIdAndDelete(req.params.id)
    .then(() => res.json('Album deleted successfully'))
    .catch(err => res.status(400).json('ERROR' + err))
})

module.exports = router
