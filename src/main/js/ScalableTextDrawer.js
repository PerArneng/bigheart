
class ScalableTextDrawer {

	constructor() { //mc:function initialize() {
		this._chars  = ". 1234567890";
		this._font = [

			//.
				0,0,0,
				0,0,0,
				0,0,0,
				0,0,0,
				0,0,1,

			//<space>
				0,0,0,
				0,0,0,
				0,0,0,
				0,0,0,
				0,0,0,
					
			//1
				0,4,1,
				0,0,1,
				0,0,1,
				0,0,1,
				0,0,1,
						
			//2
				1,1,5,
				0,0,1,
				4,1,2,
				1,0,0,
				1,1,1,
					
			//3
				1,1,5,
				0,0,1,
				1,1,1,
				0,0,1,
				1,1,2,
					
			//4
				1,0,1,
				1,0,1,
				3,1,1,
				0,0,1,
				0,0,1,
					
			//5
				1,1,1,
				1,0,0,
				1,1,5,
				0,0,1,
				1,1,2,
					
			//6
				4,1,1,
				1,0,0,
				1,1,5,
				1,0,1,
				3,1,2,
					
			//7
				1,1,5,
				0,0,1,
				0,0,1,
				0,0,1,
				0,0,1,
					
			//8
				4,1,5,
				1,0,1,
				1,1,1,
				1,0,1,
				3,1,2,
					
			//9
				4,1,5,
				1,0,1,
				3,1,1,
				0,0,1,
				1,1,2,
					
			//0
				4,1,5,
				1,0,1,
				1,0,1,
				1,0,1,
				3,1,2,
					
			//default
				1,0,1,
				0,1,0,
				1,0,1,
				0,1,0,
				1,0,1
		];
	}

	/*mc:function*/ arrayCopy(source, offset, length, target) {
		for (var i=0;i<length;i++) {
			target[i] = source[offset + i];
		}
	}


	/*mc:function*/ getOffset(haystack, needle) {
		
		if (haystack == null) {
			return -1;
		}
		
		if (needle == null) {
			return haystack.length;
		}

		var index = haystack.find(needle);

		if (index == null) {
			return haystack.length;
		} else {
			return index;
		}

	}

	/*mc:function*/ createPixelPolygon(x,y, pixelWidth, pixelHeight ,type) {
		var poly;

		var left = x;
		var right = x + pixelWidth;
		var top = y;
		var bottom = y + pixelHeight;
		
		if (type == 2) {
			poly = [
				[left, top],
				[right, top],
				[left, bottom]
			];
		} else if(type == 3) {
			poly = [
				[left, top],
				[right, top],
				[right, bottom]
			];
		} else if(type == 4) {
			poly = [
				[right, top],
				[right, bottom],
				[left, bottom]
			];
		} else if(type == 5) {
			poly = [
				[left, top],
				[right, bottom],
				[left, bottom]
			];
		} else {
			poly = [
				[left, top],
				[right, top],
				[right, bottom],
				[left, bottom]
			];
		}
		
		return poly;
	}

	
	/*mc:function*/ draw(dctx, bounds, text) {
				

		var charDim = new Dimension(3, 5);
		var bytesPerChar = 12;		

		var virtDim = new Dimension(text.length * charDim.width + 1, charDim.height);		
		var targetDim = bounds.getDimension();
						
		var vdisp = new VirtualDisplay();

		var currentChar = new Array(bytesPerChar); //mc:var currentChar = new [bytesPerChar];

		var pxDim = vdisp.pixelDimensions(virtDim, targetDim);

		for (var i=0;i<text.length/*mc:()*/;i++) {
			var chr = text.substring(i, i + 1);
			var dispCharOffset = this.getOffset(this._chars, chr) * bytesPerChar;

			this.arrayCopy(this._font, dispCharOffset, bytesPerChar, currentChar);

			for (var n=0;n<bytesPerChar;n++) {
				var type = currentChar[n];
				var charPos = vdisp.indexToPos(n, charDim);
				var pos = new Point(charPos.x + (i * (3 + 1)), charPos.y);

				var targetPos = vdisp.translatePixel(pos, virtDim, bounds);

				//var poly = createPixelPolygon(targetX,targetY, pixelWidth, pixelHeight , type);
				if (type > 0) {
					dctx.fillRectangle(targetPos.x, targetPos.y, pxDim.width, pxDim.height);
					//dctx.fillPolygon(poly);
				}
			}

		}

	}

}

