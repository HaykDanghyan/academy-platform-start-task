const router = require('express').Router()
let todo = require('../modules/todo-module')

// for receiving data
router.route('/').get((req, res) => {
    todo.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('ERROR' + err))
})

// for adding data
router.route('/add').post((req, res) => {
    const userId = req.body.userId
    const title = req.body.title
    const completed = req.body.completed
    const newTodo = new todo({userId, title, completed})
    newTodo.save()
    .then(() => res.json('Todo added successfully'))
    .catch(err => res.status(400).json('ERROR' + err))
})

// for updating data
router.route('/update/:id').post((req, res) => {
    todo.findById(req.params.id)
    .then(Todo => {
        Todo.userId = req.body.userId
        Todo.title = req.body.title
        Todo.completed = req.body.completed
        Todo.save()
        .then(() => res.json('Todo updated successfully'))
        .catch(err => res.status(400).json('ERROR' + err))
    })
    .catch(err => res.status(400).json('ERROR' + err))
})

// for deleting data
router.route('/:id').delete((req, res) => {
    todo.findByIdAndDelete(req.params.id)
    .then(() => res.json('Todo deleted successfully'))
    .catch(err => res.status(400).json('ERROR' + err))
})

module.exports = router