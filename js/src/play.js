(function () {

var NUMBER_PLAYER    = 2;
var CARDS_PER_PLAYER = 12;
var CARD_SIZE        = { width: 50, height: 200 };
var PLAYER_F_POS 	 = [{ x: 100, y: 390 }, { x: 100, y: 45 }, { x: 0, y: 0 }];
var HUMAN_PLAYER     = 0;
var types            = new Array(['Tuong ong', 1, 14], ['Tuong ba', 1, 13], ['Sy dieu', 2, 12], ['Sy den', 2, 11], ['Tuong vang', 2, 10], ['Tuong den', 2, 9], ['Xe hong', 2, 8], ['Xe den', 2, 7], ['Phao dieu', 2, 6], ['Phao den', 2, 5], ['Ma dieu', 2, 4], ['Ma den', 2, 3], ['Tot do', 5, 2], ['Tot den', 5, 1]);
var players          = new Array(NUMBER_PLAYER);
var frame, background, cards = [];

initialize();

function initialize () {
	declare();
	declareEvent();
}

function declare () {
	generateCards();
	frame = new Frame(cards);
	frame.cards = frame.shuffleCards(frame.cards);
	initPlayer();

	console.warn(players);
}

function declareEvent () {
	$('.btn-sort-card').on('click', function () {
		players[HUMAN_PLAYER].sortListCard();
		console.info('---------------------------------');
		for (var i=0, c=players[HUMAN_PLAYER].cards.length; i<c; i++) {
			// console.log(players[HUMAN_PLAYER].cards[i].type);
		}
	});
}

function initPlayer () {
	var _card, _posX, _posY;

	for (var i=0; i<NUMBER_PLAYER; i++) {
		players[i] = new Player(PLAYER_F_POS[i].x, PLAYER_F_POS[i].y);
		frame.divideCardToPlayer(players[i], CARDS_PER_PLAYER);
		players[i].makeHTML(i);
		setCardsPosition(players[i], i);
	}

	function setCardsPosition (player, index) {
		var _startX = player.fieldPosition.x, _startY = player.fieldPosition.y;

		for (var j=0, c=player.cards.length; j<c; j++) {
			player.cards[j].init(_startX, _startY, CARD_SIZE.width, CARD_SIZE.height);
			player.cards[j].draw($('#player-'+index));
			_startX += CARD_SIZE.width + 5;
		}
	}
}

function generateCards () {
	for (var i=0, c=types.length; i<c; i++) {
		cards = makeCard(types[i], cards);
	}

	function makeCard (type, listCards) {
		var _card;

		for (var j=0; j<type[1]; j++) {
			_card = new Card(type[0], type[2]);
			listCards.push(_card);
		}

		return listCards;
	}
}

})();