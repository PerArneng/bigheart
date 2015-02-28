using Toybox.Graphics as Gfx;

class ScalableTextDrawer {

	// <ecmascript>

	function arrayCopy(source, offset, length, target) {
		for (var i=0;i<length;i++) {
			target[i] = source[offset + i];
		}
	}


	function indexOf(haystack, needle) {
		
		if (haystack == null) {
			return -1;
		}
		
		if (needle == null) {
			return -1;
		}

		var index = haystack.find(needle);

		if (index == null) {
			return -1;
		} else {
			return index;
		}

	}

	// </ecmascript>
	

	function draw(dctx, x, y, width, height, text) {
				
		var dispCharOffsets = new [text.length()];
		var virtWidth = (text.length())*3;
		var virtHeight = 5;
						
		var vdisp = new VirtualDisplay(virtWidth, virtHeight, width, height, x, y);

		for (var i=0;i<text.length();i++) {
			var chr = text.substring(i, i+1);
			var dispCharOffset = indexOf(_chars, chr);

			dispCharOffsets[i] = dispCharOffset;
		}


		var dispOffset = 0;
		for (var i=0;i<dispCharOffsets.size();i++) {
			var dispCharOffset = dispCharOffsets[i];

			drawChar(dctx, vdisp, dispCharOffset, dispOffset);
		
			dispOffset = dispOffset + 3 + 1;
		}
			
	}

	function drawChar(dctx, vdisp, dispCharOffset, dispOffset) {

			for (var x=0;x<3;x++) {
				for (var y=0;y<5;y++) {
					var index = dispCharOffset + (y*3+x);
					var polyType = font[index];
					if (polyType > 0) {
						dctx.fillPolygon(vdisp.getPixelPolygon(dispOffset + x, y, polyType));
					}
				}
			}


			//for (var n=1;n<dispChar.size();n++) {
			//	var line = dispChar[n];
			//	for (var m=0;m<line.size();m++) {
			//		var polyType = line[m];
			//		if (polyType > 0) {
			//			dctx.fillPolygon(vdisp.getPixelPolygon(dispOffset + m, n-1, polyType));
			//		}
			//	}
			//}
	}

	var _chars  = ". 1234567890";
	var _widths = [1,1,3,3,3,3,3,3,3,3,3,3];
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

}

