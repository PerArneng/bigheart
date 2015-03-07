
class Graphics {

}

Graphics.COLOR_BLACK = "#000000";
Graphics.COLOR_WHITE = "#FFFFFF";


String.prototype.find = function(string) {
	var index = this.indexOf(string)
	return index < 0 ? null : index;
};

class Dc {



	constructor(dc2d, bounds) {
		this.bounds = bounds;
		this.dc2d = dc2d;
		this.setColor(Graphics.COLOR_BLACK, Graphics.COLOR_WHITE);
		this.dc2d.lineWidth="1";
	}

	setColor(foreground, background) { 
		this.bg = background;
		this.fg = foreground;
	}

	clear() {
		this.dc2d.fillStyle = this.bg;
		this.dc2d.fillRect(this.bounds.x + 0, this.bounds.y + 0, this.getWidth(), this.getHeight());
	}

	fillRectangle(x, y, width, height) {
		this.dc2d.fillStyle = this.fg;
		this.dc2d.fillRect(this.bounds.x + x, this.bounds.y + y, width, height);
	}

	getWidth() { return this.bounds.width; }

	getHeight() { return this.bounds.height; }

}


