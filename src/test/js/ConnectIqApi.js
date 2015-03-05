
class Graphics {
	static const COLOR_BLACK = "black";
	static const COLOR_WHITE = "white";
}


String.prototype.find = function(string) {
	var index = this.indexOf(string)
	return index < 0 ? null : index;
};
