'use strict'
function sumArgs() {
	var red = [].reduce;
	var csd = red.call(arguments, function(a,b) {
		return a + b;
	});
return csd;
	}

alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива
