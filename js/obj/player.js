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
	},
	makeHTML: function (index) {
		this.id = index;
		$('#field').append('<div class="player" id="player-'+index+'" style="top:'+this.fieldPosition.y+'px; left:'+this.fieldPosition.x+'px;"></div>');
	},
	sortListCard: function () {
		if (this.sortType === undefined) {
			console.log('this.sortType === undefined');

			this.sortType = 'by-rank';
		} else if (this.sortType === 'by-rank') {
			console.log('this.sortType === by-rank');

			this.sortType = 'by-group';
		} else if (this.sortType === 'by-group') {
			console.log('this.sortType === by-group');

			this.sortType = 'by-rank';
		} else {
			// do something
		}

		function sortByRank () {

		}
	}
};