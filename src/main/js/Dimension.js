
class Dimension {

	/*mc:var width;*/
	/*mc:var height;*/

	constructor(width, height) { //mc:function initialize(width, height) {
		this.width = width;
		this.height = height;
	}

	/*mc:function*/ toString() {
		return "{ width: " + this.width + ", height: " + this.height + " }";
	}

}