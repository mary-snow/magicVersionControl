const bodyParser = require('body-parser')
const express = require('express')
const app = express();
const magic = require('mtgsdk')
let deckController = require('./controllers/deckController')

app.listen(3000, function () {
  console.log("Fuck react, server is listening on port 3000")
})

app.use(express.static(__dirname + '/'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'index.js')
})

// app.get('/showDecks', deckController.showCards, (req, res)=>{
//   console.log("am I here?")
// })

app.post('/new-deck',deckController.createDeck, (req, res) => {
  res.redirect('/createDeck.html')
  res.end()
})

app.post('/addCard',deckController.addCards)

app.post('/removeLastCard', deckController.removeLastCard, (req, res) => {
  res.redirect('/')
})

