
class VirtualDisplay {
	
	hidden var _width;
	hidden var _height;
	hidden var _tWidth;
	hidden var _tHeight;
	hidden var _tXOffset;
	hidden var _tYOffset;
	hidden var _pixelWidth;
	hidden var _pixelHeight;
	
	function initialize(width, height, targetWidth, targetHeight, targetXOffset, targetYOffset) {
		_width = width;
		_height = height;
		_tWidth = targetWidth;
		_tHeight = targetHeight;
		_tXOffset = targetXOffset;
		_tYOffset = targetYOffset;
		_pixelWidth = targetWidth / width;
		_pixelHeight = targetHeight / height;
	}
	
	function getPixelPolygon(x,y, type) {
		var poly = new [4];
		var originX = _tXOffset + _pixelWidth * x;
		var originY = _tYOffset + _pixelHeight * y;
		
		var left = originX;
		var right = originX + _pixelWidth;
		var top = originY;
		var bottom = originY + _pixelHeight;
		
		if (type == 2) {
			poly = new [3];
			poly[0] = [left, top];
			poly[1] = [right, top];
			poly[2] = [left, bottom];
		} else if(type == 3) {
			poly = new [3];
			poly[0] = [left, top];
			poly[1] = [right, top];
			poly[2] = [right, bottom];
		} else if(type == 4) {
			poly = new [3];
			poly[0] = [right, top];
			poly[1] = [right, bottom];
			poly[2] = [left, bottom];
		} else if(type == 5) {
			poly = new [3];
			poly[0] = [left, top];
			poly[1] = [right, bottom];
			poly[2] = [left, bottom];
		} else {
			poly = new [4];
			poly[0] = [left, top];
			poly[1] = [right, top];
			poly[2] = [right, bottom];
			poly[3] = [left, bottom];
		}
		
		return poly;
	}
}