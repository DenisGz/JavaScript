function filterRangeInPlace (arr, a, b){
	for (i = 0; i < arr.length; i++){
		if (arr[i] < a || arr[i] > b){
			arr.splice(i, 1);
			i--;
		}
			
	}
}

var arr = [1,10,8,4,7,6,5,3,9,2];
filterRangeInPlace (arr, 2, 8);
alert (arr);