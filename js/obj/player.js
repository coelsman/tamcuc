function Player (fPosX, fPosY) {
	this.cards = [];
	this.fieldPosition = {
		x: fPosX, 
		y: fPosY
	};
}
Player.prototype = {
	addCard: function (card) {
		this.cards.push(card);
	}
};