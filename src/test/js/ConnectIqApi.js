
class Graphics {

}

Graphics.COLOR_BLACK = "#000000";
Graphics.COLOR_WHITE = "#FFFFFF";


String.prototype.find = function(string) {
	var index = this.indexOf(string)
	return index < 0 ? null : index;
};

class Dc {



	constructor(dc2d) {
		this.dc2d = dc2d;
		this.setColor(Graphics.COLOR_BLACK, Graphics.COLOR_WHITE);
	}

	setColor(foreground, background) { 
		this.bg = background;
		this.fg = foreground;
	}

	clear() {
		this.dc2d.fillStyle = this.bg;
		this.dc2d.fillRect(0, 0, this.getWidth(), this.getHeight());
	}

	fillRectangle(x, y, width, height) {
		this.fillStyle = this.fg;
		this.dc2d.fillRect(x, y, width, height);
	}

	getWidth() { return this.dc2d.canvas.width; }

	getHeight() { return this.dc2d.canvas.height; }

}


