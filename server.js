const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
require('dotenv').config()
const userRoutes = require('./routers/users')
const commentRoutes = require('./routers/comments')
const albumRoutes = require('./routers/albums')
const postRoutes = require('./routers/posts')
const photoRoutes = require('./routers/photos')
const todoRoutes = require('./routers/todos')

const app = express()
const port = process.env.PORT || 7777

app.use(cors())
app.use(express.json())
app.use('/users', userRoutes)
app.use('/comments', commentRoutes)
app.use('/albums', albumRoutes)
app.use('/posts', postRoutes)
app.use('/photos', photoRoutes)
app.use('/todos', todoRoutes)

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const uri = 'mongodb://localhost:27017'
mongoose.connect(uri, connectionParams)
.then(() => {
    console.log('Connected to MongoDB')
}).catch(err => {
    console.log('Failed to connect to MongoDB', err)
})

app.listen(port, () => {
    console.log('App is listening on port', port)
})