(function ($) {

var NUMBER_PLAYER    = 2;
var CARDS_PER_PLAYER = 12;
var CARD_SIZE        = { width: 50, height: 220 };
var PLAYER_F_POS 	 = [{ x: 350, y: 400 }, { x: 350, y: 50 }, { x: 0, y: 0 }];
var types            = new Array(['Tuong ong', 1], ['Tuong ba', 1], ['Sy dieu', 2], ['Sy den', 2], ['Tuong vang', 2], ['Tuong den', 2], ['Xe hong', 2], ['Xe den', 2], ['Phao dieu', 2], ['Phao den', 2], ['Ma dieu', 2], ['Ma den', 2], ['Tot do', 5], ['Tot den', 5]);
var players          = new Array(NUMBER_PLAYER);
var frame, background, cards = [];

initialize();

function initialize () {
	declare();
}

function declare () {
	generateCards();
	frame = new Frame(cards);
	frame.cards = frame.shuffleCards(frame.cards);
	initPlayer();
	console.warn(players);
}

function initPlayer () {
	var _card, _posX, _posY;

	for (var i=0; i<NUMBER_PLAYER; i++) {
		players[i] = new Player(PLAYER_F_POS[i].x, PLAYER_F_POS[i].y);
		frame.divideCardToPlayer(players[i], CARDS_PER_PLAYER);

		setCardsPosition(players[i]);
	}

	function setCardsPosition (player) {
		var _startX = player.fieldPosition.x, _startY = player.fieldPosition.y;

		for (var j=0, c=player.cards.length; j<c; j++) {
			player.cards[j].init(_startX, _startY, CARD_SIZE.width, CARD_SIZE.height);
			_startX += CARD_SIZE.width + 3;
		}
	}
}

function generateCards () {
	for (var i=0, c=types.length; i<c; i++) {
		cards = makeCard(types[i][0], types[i][1], cards);
	}

	function makeCard (name, number, listCards) {
		var _card;

		for (var j=0; j<number; j++) {
			_card = new Card(name)
			listCards.push(_card);
		}

		return listCards;
	}
}

})();