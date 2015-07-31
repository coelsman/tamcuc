function Card (type) {
	this.type = type;
	this.onLive = true;
}
Card.prototype = {
	init: function (posX, posY, width, height) {
		this.pos = {
			x: posX, 
			y: posY
		};
		this.size = {
			h: height, 
			w: width
		};
	},
	draw: function () {
		
	}
};