const myDeck = {

	deck: [],
	drawnCards: [],
	suits: ['hearts', 'diamonds', 'spades', 'clubs'],
	values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',

	initializeDeck() {
		const{deck, suits, values} = this;

		for (let value of values.split(',')) {
			for (let suit of suits) {
				deck.push({value, suit})
			}
		}

	},

	drawCard() {
		const card = this.deck.pop();
		this.drawnCards.push(card);
		return card;
	},

	drawMultipleCards(num) {
		const multipleCards = [];
		for (let i = 0; i < num; i++) {
			multipleCards.push(this.drawnCard());
		}

		return multipleCards;
	},

	shuffle() {
		const {deck} = this;
  		let count = deck.length;
  		while(count) {
    		deck.push(deck.splice(Math.floor(Math.random() * count), 1)[0]);
    		count -= 1;
  		}
  	}
}