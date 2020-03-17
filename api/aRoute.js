const express = require('express');
const api = express.Router();

const responseBody = `
  <h1>API Routes</h1>

  <h2>Register</h2>
  <p>/auth/register - post</p>

  <h2>Login</h2>
  <p>/auth/login - post</p>

  <h2>Users</h2>
  <p>/users - get</p>
`

api.get('/', (r, re) => {
  re.status(200).send(responseBody);
})

api.use((r, re) => {
  re.status(404).json({ message: `404: Not Found`})
})

// const knex = require('knex')
// const config = require('../knexfile')
//
// const db = knex(config);
//
module.exports = api
//   db
// };