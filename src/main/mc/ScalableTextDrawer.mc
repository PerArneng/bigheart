using Toybox.Graphics as Gfx;

class ScalableTextDrawer {

	// <ecmascript>

	var _chars  = ". 1234567890";
	var _font = [

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

	function arrayCopy(source, offset, length, target) {
		for (var i=0;i<length;i++) {
			target[i] = source[offset + i];
		}
	}


	function getOffset(haystack, needle) {
		
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

	function createPixelPolygon(x,y, pixelWidth, pixelHeight ,type) {
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

	
	function draw(dctx, xoff, yoff, width, height, text) {
				
		var virtWidth = text.length*3+1;
		var virtHeight = 5;
						
		var vdisp = new VirtualDisplay();

		var currentChar = new [12];

		var pxDimensions = vdisp.pixelDimensions(virtWidth, virtHeight, width, height);
		var pixelWidth = pxDimensions[0];
		var pixelHeight = pxDimensions[1];

		for (var i=0;i<text.length();i++) {
			var chr = text.substring(i, i+1);
			var dispCharOffset = getOffset(_chars, chr) * 12;

			arrayCopy(_font, dispCharOffset, 12, currentChar);

			for (var n=0;n<12;n++) {
				var type = currentChar[n];
				var pos = vdisp.indexToPos(n, 3, 12);
				var x = pos[0] + ((n)*(3+1));
				var y = pos[1];

				var targetPos = vdisp.translatePixel(x, y, virtWidth, virtHeight, width, height, xoff, yoff);
				var targetX = targetPos[0];
				var targetY = targetPos[1];
				//var poly = createPixelPolygon(targetX,targetY, pixelWidth, pixelHeight , type);
				if (type > 0) {
					dctx.fillRectangle(targetX, targetY, pixelWidth, pixelHeight);
					//dctx.fillPolygon(poly);
				}
			}

		}

	}

	// </ecmascript>

}

