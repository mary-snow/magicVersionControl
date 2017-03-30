const deck = require('../models/deck')

let createdDeck;

const deckController = {
  createDeck(req, res, next) {
    deck.create({
      deckName: req.body.deckName
    }).then((deck) => {
      console.log("added deck", deck)
      next()
    })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      })
  },

  addCards(req, res) {
    let foundId;
    deck.find({}, (err, result) => {
      foundId = result[result.length - 1]
      foundId.cards.push(req.body.cardName)
      foundId.save();
    }).then((foundId) => {
      //res.status(200).end()
    })
      .catch((err) => {
        console.log(err);
        //res.status(500).json(err);
      })
    
  },

  displayCards(req, res, next) {
    deck.find({}, (err, result) => {
      console.log(deck);
    })
  },

  removeLastCard(req, res, next){
    console.log("im in the remove card controller")
    deck.find({}, (err, result) => {
      console.log("im inside deck.find in remove card")
      foundCard = result[result.length-1]
      foundCard.remove()
      foundCard.save()
    }).then(() =>{

    });
    next();
  }

  // showCards(req,res,next){
  //   console.log("I get here?")
  //   console.log(deck)
  //   deck.find({}, (err, result) => {
  //     result.forEach((el) => {
  //      // document.getElementById("decksList").innerHtml += el.deckName;
  //       console.log(el.deckName)
  //     })
  //     res.json(result)
  //   }).next()
  // }
}
module.exports = deckController