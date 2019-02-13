const express = require('express')
const massive = require('massive')
require('dotenv').config()
const bodyParser = require('body-parser')
const session = require('express-session')
const ctrl = require('./controller')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()

app.use(bodyParser.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    maxAge: null
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db',db)
    console.log('Databasen funkar ju')
})

app.get('/api/allparts',ctrl.getAllParts)

app.listen(SERVER_PORT, () => {console.log('Vi hör dig på port', SERVER_PORT)})