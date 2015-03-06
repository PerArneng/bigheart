
class VirtualDisplay {
	
	/*mc:function*/ pixelDimensions(virtDim, targetDim) {

		var pixelWidth = targetDim.width / virtDim.width;
		var pixelHeight = targetDim.height / virtDim.height;

		return new Dimension(pixelWidth, pixelHeight);
	}

	/*mc:function*/ translatePixel(point, virtDim, targetBounds) {

		var targetDim = targetBounds.getDimension();
		var pxlDim = this.pixelDimensions(virtDim, targetDim);

		var xpos = point.x * pxlDim.width + targetBounds.x;
		var ypos = point.y * pxlDim.height + targetBounds.y;

		return new Point(xpos, ypos);
	}

	/*mc:function*/ indexToPos(index, dim) {
		var x = index % dim.width;
		var y = (index - x) / dim.width;
		return new Point(x, y);
	}

}