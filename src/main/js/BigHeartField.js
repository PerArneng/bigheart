//mc:using Toybox.Application;
//mc:using Toybox.WatchUi;
//mc:using Toybox.Graphics;
//mc:using Toybox.Lang;

class BigHeartField /*mc:extends WatchUi.DataField*/ {


  constructor() { //mc:function initialize() {
    this.nfo = null;
    this.std = new ScalableTextDrawer();
  }

  /*mc:function*/ compute(info) {
  	this.nfo = info;
  }
  
  /*mc:function*/ onUpdate(dc) {
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
