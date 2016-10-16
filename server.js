const express = require('express')
const http = require('http')
const path = require('path')
// const routes = require('./app/routes/someroute')
// const mongo = require('mongodb').MongoClient
const cors = require('cors')
const bodyParser = require('body-parser')
const favicon = require('serve-favicon')

const app = express()

// const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:27018/data'

app.use(express.static(`${__dirname}/public/`))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.enable('trust proxy')
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

const port = process.env.PORT || 8081

const server = http.Server(app)
server.listen(port, () => {
  console.log(`Server Running on port: ${port}`)
})
