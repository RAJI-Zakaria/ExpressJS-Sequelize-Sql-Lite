//create a server running on the port 3000
//i am going to use sequelize and sqlite to create a database
//i am going to use express to create a server

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const routes = require('./routes')
app.use('/api', routes) // Mount the routes under the '/api' prefix

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
