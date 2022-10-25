const router = require('express').Router()
let post = require('../modules/post-module')

// for receiving data
router.route('/').get((req, res) => {
    post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('ERROR' + err))
})

// for adding data
router.route('/add').post((req, res) => {
    const userId = req.body.userId
    const title = req.body.title
    const body = req.body.body
    const newPost = new post({userId, title, body})
    newPost.save()
    .then(() => res.json('Post added successfully'))
    .catch(err => res.status(400).json('ERROR' + err))
})

// for updating data
router.route('/update/:id').post((req, res) => {
    post.findById(req.params.id)
    .then(Post => {
        Post.userId = req.body.userId
        Post.title = req.body.title
        Post.body = req.body.body
        Post.save()
        .then(() => res.json('Post updated successfully'))
        .catch(err => res.status(400).json('ERROR' + err))
    })
    .catch(err => res.status(400).json('ERROR' + err))
})

// for deleting data
router.route('/:id').delete((req, res) => {
    post.findByIdAndDelete(req.params.id)
    .then(() => res.json('Post deleted successfully'))
    .catch(err => res.status(400).json('ERROR' + err))
})


module.exports = router