using Toybox.Application;
using Toybox.WatchUi;
using Toybox.Graphics;
using Toybox.Lang;

class BigHeartField extends WatchUi.DataField {

  var nfo;
  var std = new ScalableTextDrawer();
    
  function compute(info) {
  	nfo = info;
  }
  
  function onUpdate(dc) {
  	dc.setColor(Graphics.COLOR_BLACK, Graphics.COLOR_WHITE);
  	dc.clear();
  	dc.setColor(Graphics.COLOR_BLACK, Graphics.COLOR_WHITE);
  	
  	var textToDraw = "000";
  	if (nfo.currentHeartRate !=null) {
  		textToDraw = Lang.format("$1$", [nfo.currentHeartRate]);
  	}
  	std.draw(dc, 2, 2, dc.getWidth()-2, dc.getHeight()-2, textToDraw);
  }
}
