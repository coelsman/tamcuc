function Card (type, rank) {
	this.type = type;
	this.rank = rank;
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
	draw: function (parentHTML) {
		var _class = this.type.replace(' ', '-');
		parentHTML.append('<div class="card '+_class+'" style="height:'+this.size.h+'px; width:'+this.size.w+'px; position:absolute; top:'+this.pos.y+'px; left:'+this.pos.x+'px;"></div>');
	}
};