
class ScalableTextDrawer {

	/*mc:var _chars;*/
	/*mc:var _font;*/

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
				0,0,1,
				0,0,1,
				0,0,1,
				0,0,1,
				0,0,1,
						
			//2
				1,1,1,
				0,0,1,
				1,1,1,
				1,0,0,
				1,1,1,
					
			//3
				1,1,1,
				0,0,1,
				1,1,1,
				0,0,1,
				1,1,1,
					
			//4
				1,0,1,
				1,0,1,
				1,1,1,
				0,0,1,
				0,0,1,
					
			//5
				1,1,1,
				1,0,0,
				1,1,1,
				0,0,1,
				1,1,1,
					
			//6
				1,1,1,
				1,0,0,
				1,1,1,
				1,0,1,
				1,1,1,
					
			//7
				1,1,1,
				0,0,1,
				0,0,1,
				0,0,1,
				0,0,1,
					
			//8
				1,1,1,
				1,0,1,
				1,1,1,
				1,0,1,
				1,1,1,
					
			//9
				1,1,1,
				1,0,1,
				1,1,1,
				0,0,1,
				1,1,1,
					
			//0
				1,1,1,
				1,0,1,
				1,0,1,
				1,0,1,
				1,1,1,
					
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
			return haystack.length/*mc:()*/;
		}

		var index = haystack.find(needle);

		if (index == null) {
			return haystack.length/*mc:()*/;
		} else {
			return index;
		}

	}

	
	/*mc:function*/ draw(dctx, bounds, heartRate) {
				
  		var text = "" + heartRate; //mc:var text = Lang.format("$1$", [heartRate]);
  		var textLength = text.length/*mc:()*/;
		var charDim = new Dimension(3, 5);
		var bytesPerChar = 15;		

		var virtDim = new Dimension(textLength * charDim.width + (textLength - 1), 
									charDim.height);		
		var targetDim = bounds.getDimension();
						
		var vdisp = new VirtualDisplay();

		var currentChar = new Array(bytesPerChar); //mc:var currentChar = new [bytesPerChar];

		var pxDim = vdisp.pixelDimensions(virtDim, targetDim);

		for (var i=0;i<textLength;i++) {
			var chr = text.substring(i, i + 1);
			var dispCharOffset = this.getOffset(this._chars, chr) * bytesPerChar;

			this.arrayCopy(this._font, dispCharOffset, bytesPerChar, currentChar);

			for (var n=0;n<bytesPerChar;n++) {
				var doDraw = currentChar[n];
				if (doDraw > 0) {
					var charPos = vdisp.indexToPos(n, charDim);
					var pos = new Point(charPos.x + (i * (charDim.width + 1)), charPos.y);

					var targetPos = vdisp.translatePixel(pos, virtDim, bounds);

					dctx.fillRectangle(targetPos.x, targetPos.y, pxDim.width, pxDim.height);
				}
			}

		}

	}

}

