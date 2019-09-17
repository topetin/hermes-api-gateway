const express = require('express')
const http = require('http')
const cors = require('cors')

const homeRouter = require('./routes/homeRouter.js')

const app = express()
const server = http.createServer(app)

const port = process.env.PORT || 3000

app.use(cors({origin: 'https://hermes-chat-ui.herokuapp.com'}))
app.use(homeRouter)

server.listen(port, () => {
    console.log('Server is up on port', port)
})