//mc:using Toybox.Application;
//mc:using Toybox.WatchUi;
//mc:using Toybox.Graphics;
//mc:using Toybox.Lang;

class BigHeartField /*mc:extends WatchUi.DataField*/ {

	//mc:var nfo;
	//mc:var std;

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

  		var hr = 451;
  		if (this.nfo.currentHeartRate != null) {
  			hr = "" + this.nfo.currentHeartRate;
  		}

  		var bounds = new Rectangle( 2, 2, dc.getWidth()-2, dc.getHeight()-2);

	  	this.std.draw(dc, bounds, hr);
  	}
}
