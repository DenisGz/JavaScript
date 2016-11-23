
var arr = [1, 2, 3, 4, 5];
function getSums(arr) {
	var arrSum = [];
	if (!arr.length) return result;
	var total = arr.reduce(function(a, b){
		arrSum.push(a);
		return a + b;
		});
	arrSum.push(total);
return arrSum;
	}


alert( getSums(arr) ); 