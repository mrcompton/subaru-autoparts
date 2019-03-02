const express = require('express')
require('dotenv').config()
const massive = require('massive')
const session = require('express-session')
const bodyParser = require('body-parser')
const ctrl = require('./controller')
const cors = require('cors')
const app = module.exports = express()


const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET,STRIPE_SECRET_KEY} = process.env
const stripe = require("stripe")(STRIPE_SECRET_KEY)

// const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use( express.static( `${__dirname}/../build` ) )

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

//post order to database
app.post('/api/order',ctrl.postOrder)
app.get('/api/ordernum',ctrl.getOrderNum)
app.post('/api/orderedparts',ctrl.postOrderedParts)

//stripe functionality
app.post('/api/payment', function(req, res, next){
    //convert amount to pennies
    const amountArray = req.body.amount.toString().split('');
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++) {
      if(amountArray[i] === ".") {
        if (typeof amountArray[i + 1] === "string") {
          pennies.push(amountArray[i + 1]);
        } else {
          pennies.push("0");
        }
        if (typeof amountArray[i + 2] === "string") {
          pennies.push(amountArray[i + 2]);
        } else {
          pennies.push("0");
        }
          break;
      } else {
          pennies.push(amountArray[i])
      }
    }
    const convertedAmt = parseInt(pennies.join(''));
  
    const charge = stripe.charges.create({
    amount: convertedAmt, // amount in cents, again
    currency: 'usd',
    source: req.body.token.id,
    description: 'Test charge from react app'
  }, function(err, charge) {
      if (err) return res.sendStatus(500)
      return res.sendStatus(200);
    // if (err && err.type === 'StripeCardError') {
    //   // The card has been declined
    // }
  });
  });

app.listen(SERVER_PORT, () => {console.log('Vi hör dig på port', SERVER_PORT)})