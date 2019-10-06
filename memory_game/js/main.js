	var cards = ['queen', 'queen', 'king', 'king'];
	var cardsInPlay = [];

	function checkForMatch() {

		if (cardsInPlay[0] === cardsInPlay[1]) {
			
			alert("You've found a match!");
		}
		else {
		
			alert("Sorry, try again.");
		}
	}
	
	function flipCard(cardId) {

		cardsInPlay.push(cards[cardId]);

		console.log("User flipped " + cards[cardId]);

		if (cardsInPlay.length === 2) {
	
			checkForMatch();
	
			}

		}

flipCard(0);
flipCard(2);

