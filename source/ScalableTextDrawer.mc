using Toybox.Graphics as Gfx;

class ScalableTextDrawer {

	var font;
	
	function initialize() {

  		font = {
  		    "." => [1,
						[0],
						[0],
						[0],
						[0],
						[1]
					],
  		  	" " => [1,
						[0],
						[0],
						[0],
						[0],
						[0]
					],
  			"1" => [2,
						[4,1],
						[0,1],
						[0,1],
						[0,1],
						[0,1]
					],	
			"2" => [3,
						[1,1,5],
						[0,0,1],
						[4,1,2],
						[1,0,0],
						[1,1,1]
					],
			"3" => [3,
						[1,1,5],
						[0,0,1],
						[1,1,1],
						[0,0,1],
						[1,1,2]
					],
			"4" => [3,
						[1,0,1],
						[1,0,1],
						[3,1,1],
						[0,0,1],
						[0,0,1]
					],
			"5" => [3,
						[1,1,1],
						[1,0,0],
						[1,1,5],
						[0,0,1],
						[1,1,2]
					],
			"6" => [3,
						[4,1,1],
						[1,0,0],
						[1,1,5],
						[1,0,1],
						[3,1,2]
					],
			"7" => [3,
						[1,1,5],
						[0,0,1],
						[0,0,1],
						[0,0,1],
						[0,0,1]
					],
			"8" => [3,
						[4,1,5],
						[1,0,1],
						[1,1,1],
						[1,0,1],
						[3,1,2]
					],
			"9" => [3,
						[4,1,5],
						[1,0,1],
						[3,1,1],
						[0,0,1],
						[1,1,2]
					],
			"0" => [3,
						[4,1,5],
						[1,0,1],
						[1,0,1],
						[1,0,1],
						[3,1,2]
					],
			"default" => [3,
						  [1,0,1],
						  [0,1,0],
						  [1,0,1],
						  [0,1,0],
						  [1,0,1]
					]
		};

	}

	function getDispChar(chr) {
		var dispchar = font[chr];
		if (dispchar == null) {
			dispchar = font["default"];
		}
		return dispchar;
	}


	function draw(dctx, x, y, width, height, text) {
				
		var dispChars = new [text.length()];
		var virtWidth = text.length()-1;
		var virtHeight = 5;
				
		for (var i=0;i<text.length();i++) {
			var chr = text.substring(i, i+1);
			var dispChar = getDispChar(chr);
			dispChars[i] = dispChar;
			virtWidth = virtWidth + dispChar[0]; 
		}
				
		var vdisp = new VirtualDisplay(virtWidth, virtHeight, width, height, x, y);

		var charOffset = 0;
		for (var i=0;i<dispChars.size();i++) {
			var dispChar = dispChars[i];
			var charWidth = dispChar[0];
			for (var n=1;n<dispChar.size();n++) {
				var line = dispChar[n];
				for (var m=0;m<line.size();m++) {
					var polyType = line[m];
					if (polyType > 0) {
						dctx.fillPolygon(vdisp.getPixelPolygon(charOffset + m, n-1, polyType));
					}
				}
			}
			charOffset = charOffset + charWidth + 1;
		
		}
			
	}

}

