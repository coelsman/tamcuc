function Frame (listCard) {
	this.cards = listCard;
}
Frame.prototype = {

	divideCardToPlayer: function (player, numCard) {
		for (var i=0; i<numCard; i++) {
			if (this.cards[i] !== undefined) {
				player.addCard(this.cards[i]);
				this.cards.splice(i, 1);
			}
		}
	},

	shuffleCards: function (array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		while (0 !== currentIndex) {
			randomIndex         = Math.floor(Math.random() * currentIndex);
			currentIndex        -= 1;
			
			temporaryValue      = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex]  = temporaryValue;
		}

		return array;
	}
	/*removeCardFromList: function (cards) {
		if (Array.isArray(cards)) {
			for (var i=0, c=cards.length; i<c; i++) {
				this.
			}
		} else {

		}
	}*/

};