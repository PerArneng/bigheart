
QUnit.test( "PixelMatrix::coordToIndex happy 1x1", function( assert ) {
	var index = PixelMatrix.coordToIndex(1, 1, 0, 0);
	assert.equal(index, 0, "Expected index 0")
});

QUnit.test( "PixelMatrix::coordToIndex happy 2x2", function( assert ) {
	var fn = PixelMatrix.coordToIndex;
	assert.equal(fn(2,2,1,1), 3, "Expected index 3");
	assert.equal(fn(2,2,0,0), 0, "Expected index 0");
	assert.equal(fn(2,2,0,1), 2, "Expected index 2");
    assert.equal(fn(2,2,1,0), 1, "Expected index 1");
    assert.equal(fn(2,2,2,2), -1, "Expected index -1");
    assert.equal(fn(2,2,-1,-1), -1, "Expected index -1");
});

QUnit.test( "PixelMatrix::getPixel putPixel happy 2x2", function( assert ) {
    var pxl = new PixelMatrix(2, 2);
    pxl.putPixel(1, 1, 666);
    assert.equal(pxl.getPixel(1,1), 666, "Expected color 666")
    pxl.putPixel(0, 1, 333);
    assert.equal(pxl.getPixel(0,1), 333, "Expected color 333")
    assert.equal(pxl.getPixel(1, 0), 0, "Expected color 0")
});

QUnit.test( "PixelMatrix::calculateSectionLength happy", function( assert ) {
    var sectionLength = PixelMatrix.calculateSectionLength(10, 3, 1);
    assert.equal(sectionLength, 2, "Expected section Length of 2");

    var sectionLength2 = PixelMatrix.calculateSectionLength(5, 1, 2);
    assert.equal(sectionLength2, 1, "Expected section Length of 1");

    var sectionLength3 = PixelMatrix.calculateSectionLength(20, 2, 2);
    assert.equal(sectionLength3, 7, "Expected section Length of 7");
});

QUnit.test( "PixelMatrix::upscalePixel happy", function( assert ) {
    var newPixel = PixelMatrix.upscalePixel(0, 0, 2, 2, 20, 20, 1);
    assert.equal(newPixel.join(), [1,1,10,10].join(), "Expected 1,1,10,10");
});
