function Frame (listCard) {
	this.cards = listCard;
}
Frame.prototype = {

	divideCardToPlayer: function (player, numCard) {
		for (var i=0; i<numCard; i++) {
			/*console.log(i);
			console.log(this.cards);*/
			if (this.cards[0] !== undefined) {
				player.addCard(this.cards[0]);
				this.cards.splice(0, 1);
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

};