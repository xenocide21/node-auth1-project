const express = require('express');

const server = express();

server.use(express.json());
server.use(require('cors')())
server.use(require('helmet')());
server.use(require('morgan')('common'));

const apiRouter = require('./api/aRoute')
const authRouter = require('./auth/auRoute')
const userRouter = require('./users/uRoute')

server.use('/api', apiRouter);
server.use('/auth', authRouter)
server.use('/users', userRouter)

server.get('/', (req, res) => {
  res.status(200).json({ message: `welcome to auth1-project. Visit /api to get started`})
})

server.use((req, res) => {
  res.status(404).json({ message: `status 404: resource not found on server`})
})

module.exports = server;