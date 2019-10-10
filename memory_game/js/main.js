	var cards = [

		{
			rank: "queen",
			suit: "hearts",
			cardImage: "images/queen-of-hearts.png"

		},

		{
			rank: "queen",
			suit: "diamonds",
			cardImage: "images/queen-of-diamonds.png"

		},

		{
			rank: "king",
			suit: "hearts",
			cardImage: "images/king-of-hearts.png"

		},


		{
			rank: "king",
			suit: "diamonds",
			cardImage: "images/king-of-diamonds.png"

		}
	];

	var cardsInPlay = [];

	function checkForMatch() {

		if (cardsInPlay[0] === cardsInPlay[1]) {
			
			alert("You've found a match!");
		}
		else {
		
			alert("Sorry, try again.");
		}
	
	}
	
	function flipCard() {

		var cardId = this.getAttribute('data-id');	//grab data id of current card that was clicked, store in cardId
		cardsInPlay.push(cards[cardId].rank);   //push currentcard click rank into cards inplay array
		console.log("User flipped " + cards[cardId].rank);
		console.log(cards[cardId].cardImage);
		console.log(cards[cardId].suit);

		this.setAttribute('src', cards[cardId].cardImage); //cardId holds the data attribute of the current 'this'
													
		if (cardsInPlay.length === 2) {
	
			checkForMatch();
	
			}
		
		}

	function createBoard() {

		for(i = 0; i < cards.length; i++) {
			var cardElement = document.createElement('img');			//create image store in cardELement
			cardElement.setAttribute('src', 'images/back.png');			//appends image path to image src
			cardElement.setAttribute('data-id', i);						//sets data id as current card loop index
			cardElement.addEventListener('click', flipCard);			//click event listener run flipcard
			document.getElementById('game-board').appendChild(cardElement);  //append cardelement images to div
		}

	}

	createBoard();





