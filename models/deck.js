const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://magic:thegathering@ds143330.mlab.com:43330/quotes_app', (err, database) => {
  if (err) return console.log(error);
  console.log("connected to mongodb")
})

const deckSchema = new Schema ({
  deckName: String,
  cards: [String]
})

const deck = mongoose.model('deck', deckSchema);
module.exports = deck;