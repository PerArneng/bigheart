
class VirtualDisplay {

	// <ecmascript>
	
	function pixelDimensions(width, height, targetWidth, targetHeight) {

		var pixelWidth = targetWidth / width;
		var pixelHeight = targetHeight / height;

		return [pixelWidth, pixelHeight];
	}

	function translatePixel(x, y, width, height, targetWidth, targetHeight, targetXOffset, targetYOffset) {

		var dimensions = pixelDimensions(width, height, targetWidth, targetHeight);

		var pixelWidth = dimensions[0];
		var pixelHeight = dimensions[1];

		var xpos = x * pixelWidth + targetXOffset;
		var ypos = y * pixelHeight + targetYOffset;

		return [xpos, ypos];
	}

	function indexToPos(index, width, height) {
		var x = index % width;
		var y = (index - x) / width;
		return [x, y];
	}

	// </ecmascript>	

}