let cardsArr;
let cardList = [];
let newDiv = document.createElement('div')

  $.get("https://api.mlab.com/api/1/databases/quotes_app/collections/decks?apiKey=Uz33e4I4ng_cnWf9YrcKIeIsDqBwsa0U", function (data, status) {
    let cardsHTML = ""
    console.log(data)
    let newDeck = data[data.length - 1]
    console.log(newDeck)
    document.getElementById("nameOfDeck").innerHTML = data[data.length - 1].deckName
    cardsArr = data[data.length - 1]
    cardsArr.cards.forEach((el) => {
      cardsHTML += el + "\n"
      document.getElementById("cardList").appendChild(newDiv).innerHTML = cardsHTML;
    })
  });



function appendCardDiv() {
  console.log("insdie append Card Div", cardsArr)
  let topofList = document.getElementById("cardList")
  let newDiv = document.createElement("div")
  let formInput = document.getElementById("addCard").value;
  cardList.push(formInput)
  topofList.appendChild(newDiv).innerHTML = formInput;
}
