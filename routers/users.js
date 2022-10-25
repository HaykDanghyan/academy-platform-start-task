const router = require('express').Router()
let user = require('../modules/user-module')

// for receiving data
router.route('/').get((req, res) => {
    user.find()
    .then(Users => res.json(Users))
    .catch(err => res.status(400).json('ERROR' + err))
})

// for adding data
router.route('/add').post((req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const username = req.body.username
    const email = req.body.email

    const newUser = new user({name, age, username, email, address})
    newUser.save()
    .then(() => res.json('User added successfully'))
    .catch(err => res.status(400).json('ERROR' + err))
})

// for deleting data
router.route('/:id').delete((req, res) => {
    user.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted successfully'))
    .catch(err => res.status(400).json('ERROR' + err))
})

// for updating data
router.route('/update/:id').post((req, res) => {
    user.findById(req.params.id)
    .then(User => {
        User.name = req.body.name
        User.age = req.body.age
        User.username = req.body.username
        User.email = req.body.email
        User.save()
        .then(() => res.json('User updated successfully'))
        .catch(err => res.status(400).json('ERROR' + err))
    })
    .catch(err => res.status(400).json('ERROR' + err))
})

module.exports = router