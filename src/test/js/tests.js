
QUnit.test( "ScalableTextDrawer::getOffset happy", function( assert ) {
	assert.equal(getOffset("123", "2"), 1, "Expected index 1")
});

QUnit.test( "ScalableTextDrawer::getOffset happy 2", function( assert ) {
	assert.equal(getOffset("123", "3"), 2, "Expected index 2")
});

QUnit.test( "ScalableTextDrawer::getOffset not found", function( assert ) {
	assert.equal(getOffset("123", "X"), 3, "Expected index -1")
});

QUnit.test( "ScalableTextDrawer::getOffset haystack null", function( assert ) {
	assert.equal(getOffset(null, "X"), -1, "Expected index -1")
});

QUnit.test( "ScalableTextDrawer::getOffset needle null", function( assert ) {
	assert.equal(getOffset("X", null), 1, "Expected index -1")
});

QUnit.test( "ScalableTextDrawer::arrayCopy happy", function( assert ) {

	var source = [1,2,3,4,5,6,7,8];
	var target = [0, 0, 0];

	arrayCopy(source, 0, target.length, target);
	assert.equal(target[2], 3, "Expected 3");

	arrayCopy(source, 0, target.length, target);
	assert.equal(target[0], 1, "Expected index 1");

	arrayCopy(source, 2, target.length, target);
	assert.equal(target[0], 3, "Expected index 3");
});

QUnit.test( "ScalableTextDrawer::createPixelPolygon happy", function( assert ) {

	var poly = createPixelPolygon(10, 10, 10, 10, 1);

	assert.equal(poly[0][0], 10, "Expected 10");
	assert.equal(poly[0][1], 10, "Expected 10");

});

QUnit.test( "VirtualDisplay::pixelDimensions happy", function( assert ) {
	var dimensions = pixelDimensions(4, 4, 100, 100);
	assert.equal(dimensions[0], 25, "Expected width 25")
	assert.equal(dimensions[1], 25, "Expected height 25")
});

QUnit.test( "VirtualDisplay::translatePixel happy", function( assert ) {
	
	var location = translatePixel(0, 0, 4, 4, 100, 100, 0, 0);
	assert.equal(location[0], 0, "Expected xpos 0")
	assert.equal(location[1], 0, "Expected xpos 0")

	location = translatePixel(1, 1, 4, 4, 100, 100, 0, 0);
	assert.equal(location[0], 25, "Expected xpos 25")
	assert.equal(location[1], 25, "Expected xpos 25")

});

QUnit.test( "VirtualDisplay::indexToPos happy", function( assert ) {

	var pos = indexToPos(0, 3, 4);
	assert.equal(pos[0], 0, "Expected x 0")
	assert.equal(pos[1], 0, "Expected y 0")

	var pos = indexToPos(7, 3, 4);
	assert.equal(pos[0], 1, "Expected x 1")
	assert.equal(pos[1], 2, "Expected y 2")
});
