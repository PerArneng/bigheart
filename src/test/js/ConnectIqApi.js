
class Info {

	constructor() {
		this.currentHeartRate = 123;
	}

}


class Graphics {

}

Graphics.COLOR_WHITE = "#FFFFFF";
Graphics.COLOR_LT_GRAY = "#AAAAAA";
Graphics.COLOR_DK_GRAY = "#555555";
Graphics.COLOR_BLACK = "#000000";
Graphics.COLOR_RED = "#FF0000";
Graphics.COLOR_DK_RED = "#AA0000";
Graphics.COLOR_ORANGE = "#FF5500";
Graphics.COLOR_YELLOW = "#FFAA00";
Graphics.COLOR_GREEN = "#00FF00";
Graphics.COLOR_DK_GREEN = "#00AA00";
Graphics.COLOR_BLUE = "#00AAFF";
Graphics.COLOR_DK_BLUE = "#0000FF";
Graphics.COLOR_PURPLE = "#AA00FF";
Graphics.COLOR_PINK = "#FF00FF";

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


