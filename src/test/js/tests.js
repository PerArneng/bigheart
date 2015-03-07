
QUnit.test( "ScalableTextDrawer::getOffset happy", function( assert ) {
	var std = new ScalableTextDrawer();
	assert.equal(std.getOffset("123", "2"), 1, "Expected index 1")
});

QUnit.test( "ScalableTextDrawer::getOffset happy 2", function( assert ) {
	var std = new ScalableTextDrawer();
	assert.equal(std.getOffset("123", "3"), 2, "Expected index 2")
});

QUnit.test( "ScalableTextDrawer::getOffset not found", function( assert ) {
	var std = new ScalableTextDrawer();
	assert.equal(std.getOffset("123", "X"), 3, "Expected index -1")
});

QUnit.test( "ScalableTextDrawer::getOffset haystack null", function( assert ) {
	var std = new ScalableTextDrawer();
	assert.equal(std.getOffset(null, "X"), -1, "Expected index -1")
});

QUnit.test( "ScalableTextDrawer::getOffset needle null", function( assert ) {
	var std = new ScalableTextDrawer();
	assert.equal(std.getOffset("X", null), 1, "Expected index -1")
});

QUnit.test( "ScalableTextDrawer::arrayCopy happy", function( assert ) {

	var std = new ScalableTextDrawer();


	var source = [1,2,3,4,5,6,7,8];
	var target = [0, 0, 0];

	std.arrayCopy(source, 0, target.length, target);
	assert.equal(target[2], 3, "Expected 3");

	std.arrayCopy(source, 0, target.length, target);
	assert.equal(target[0], 1, "Expected index 1");

	std.arrayCopy(source, 2, target.length, target);
	assert.equal(target[0], 3, "Expected index 3");
});

QUnit.test( "ScalableTextDrawer::createPixelPolygon happy", function( assert ) {

	var std = new ScalableTextDrawer();

	var poly = std.createPixelPolygon(10, 10, 10, 10, 1);

	assert.equal(poly[0][0], 10, "Expected 10");
	assert.equal(poly[0][1], 10, "Expected 10");

});

QUnit.test( "VirtualDisplay::pixelDimensions happy", function( assert ) {
	var vdisp = new VirtualDisplay();
	var dimensions = vdisp.pixelDimensions(new Dimension(4, 4), new Dimension(100, 100));
	assert.equal(dimensions.width, 25, "Expected width 25");
	assert.equal(dimensions.height, 25, "Expected height 25");
});

QUnit.test( "VirtualDisplay::translatePixel happy", function( assert ) {
	var vdisp = new VirtualDisplay();
	
	var location = vdisp.translatePixel(new Point( 0, 0), new Dimension(4, 4), new Rectangle( 0, 0, 100, 100));
	assert.equal(location.x, 0, "Expected xpos 0");
	assert.equal(location.y, 0, "Expected xpos 0");

	location = vdisp.translatePixel(new Point(1, 1), new Dimension(4, 4), new Rectangle( 0, 0, 100, 100));
	assert.equal(location.x, 25, "Expected xpos 25");
	assert.equal(location.y, 25, "Expected xpos 25");

});

QUnit.test( "VirtualDisplay::indexToPos happy", function( assert ) {
	var vdisp = new VirtualDisplay();

	var pos = vdisp.indexToPos(0, new Dimension(3, 4));
	assert.equal(pos.x, 0, "Expected x 0")
	assert.equal(pos.y, 0, "Expected y 0")

	var pos = vdisp.indexToPos(3, new Dimension(3, 4));
	assert.equal(pos.x, 0, "Expected x 1")
	assert.equal(pos.y, 1, "Expected y 2")
});

QUnit.test( "VirtualDisplay::indexToPos happy", function( assert ) {
	var vdisp = new VirtualDisplay();

	var pos = vdisp.indexToPos(14, new Dimension(3, 5));
	assert.equal(pos.x, 2, "Expected x 2")
	assert.equal(pos.y, 4, "Expected y 4")

});
