function appendCardDiv() {
  console.log("am i in the list?")
  let topofList = document.getElementById("cardList")
  let newDiv = document.createElement("div")
  let formInput = document.getElementById("addCard").value;
  topofList.appendChild(newDiv).innerHTML = formInput;
}


function showDecks() {
  $.get("https://api.mlab.com/api/1/databases/quotes_app/collections/decks?apiKey=Uz33e4I4ng_cnWf9YrcKIeIsDqBwsa0U", function (data, status) {
    let deckTitle = "";
    data.forEach((el) => {
    let newDiv = document.createElement("div")
    newDiv.className = "titleOfDeck"
    let cards = document.createElement("li")
    console.log(el.cards)
    cards.innerHTML = el.cards
    newDiv.innerHTML =  el.deckName 
     let anotherDiv = document.getElementById("decksList").appendChild(newDiv)
     anotherDiv.appendChild(cards)//.innerHTML = deckTitle
    })
  })

}


