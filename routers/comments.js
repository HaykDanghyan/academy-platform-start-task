const router = require('express').Router()
let comment = require('../modules/comment-module')

// for receiving data
router.route('/').get((req, res) => {
    comment.find()
    .then(comments => res.json(comments))
    .catch(err => res.status(400).json('ERROR' + err))
})

// for adding data
router.route('/add').post((req, res) => {
    const postId = req.body.postId
    const name = req.body.name
    const email = req.body.email
    const body = req.body.body
    const newComment = new comment({postId, name, email, body})
    newComment.save()
    .then(() => res.json('Comment added successfully'))
    .catch(err => res.status(400).json('ERROR' + err))
})

// for deleting data
router.route('/:id').delete((req, res) => {
    comment.findByIdAndDelete(req.params.id)
    .then(() => res.json('Comment deleted successfully'))
    .catch(err => res.status(400).json('ERROR' + err))
})

// for updating data
router.route('/update/:id').post((req, res) => {
    comment.findById(req.params.id)
    .then(Comment => {
        Comment.postId = req.body.postId
        Comment.name = req.body.name
        Comment.body = req.body.body
        Comment.email = req.body.email
        Comment.save()
        .then(() => res.json('Comment updated successfully'))
        .catch(err => res.status(400).json('ERROR' + err))
    })
    .catch(err => res.status(400).json('ERROR' + err))
})

module.exports = router