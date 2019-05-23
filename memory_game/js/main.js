var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[1];
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
	console.log(true);
  if (cardsInPlay[0] !== cardsInPlay[1]) {
		alert("Sorry, try again.");
	} else {
 		alert("You found a match!");
	}
}

console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);





