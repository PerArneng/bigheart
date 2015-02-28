
QUnit.test( "ScalableTextDrawer::indexOf happy", function( assert ) {
	assert.equal(indexOf("123", "2"), 1, "Expected index 1")
});

QUnit.test( "ScalableTextDrawer::indexOf happy 2", function( assert ) {
	assert.equal(indexOf("123", "3"), 2, "Expected index 2")
});

QUnit.test( "ScalableTextDrawer::indexOf not found", function( assert ) {
	assert.equal(indexOf("123", "X"), -1, "Expected index -1")
});

QUnit.test( "ScalableTextDrawer::indexOf haystack null", function( assert ) {
	assert.equal(indexOf(null, "X"), -1, "Expected index -1")
});

QUnit.test( "ScalableTextDrawer::indexOf needle null", function( assert ) {
	assert.equal(indexOf("X", null), -1, "Expected index -1")
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