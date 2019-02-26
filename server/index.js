const express = require('express')
require('dotenv').config()
const massive = require('massive')
const session = require('express-session')
const bodyParser = require('body-parser')
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

//get parts
app.get('/api/allparts',ctrl.getAllParts)
app.post('/api/parts',ctrl.getParts)
app.post('/api/part',ctrl.addPart)
app.put('/api/part/:id',ctrl.editPart)
app.delete('/api/part/:id',ctrl.deletePart)
//authentication
app.post('/api/register',ctrl.register)
app.post('/api/login',ctrl.login)
app.get('/api/logout', ctrl.logout)


//shopping cart
// app.post('/api/cart',ctrl.addToCart)
// app.put('/api/cart/:id',ctrl.editCart)
// app.delete('/api/cart/:id',ctrl.removeFromCart)

app.listen(SERVER_PORT, () => {console.log('Vi hör dig på port', SERVER_PORT)})