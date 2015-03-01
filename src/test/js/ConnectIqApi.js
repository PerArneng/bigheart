

String.prototype.find = function(string) {
	var index = this.indexOf(string)
	return index < 0 ? null : index;
};
