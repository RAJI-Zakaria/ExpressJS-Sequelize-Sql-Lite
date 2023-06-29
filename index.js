//create a server running on the port 3000
//i am going to use sequelize and sqlite to create a database
//i am going to use express to create a server

const express = require('express')
const app = express()
const port = 3000
const db = require('./models')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

// we will use routes to handle requests
const routes = require('./routes')
app.use('/api', routes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
