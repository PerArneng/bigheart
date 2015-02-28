
var ciq = (function () {


	this.String = function (jsstr) {

		this.jsstr = jsstr;

		this.find = function(str) {
			var index = this.jsstr.indexOf(str.jsstr)
			return index < 0 ? null : index;
		};

	}

	return this;

})();