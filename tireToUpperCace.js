function findIndex (arr, value){
  var index = [];
  for (var i = 0; i < arr.length; i++) {
 if (arr[i] == value) {
   index.push(i);
   
 }
 }
return index;
 }


function camelize (str){
	var arr = str.split('');
	var indArr = findIndex(arr, '-');
	for (i=0; i < indArr.length; i++){
		arr.splice((indArr[i] - i), 1);
	    arr[indArr[i]-i] = arr[indArr[i]-i].toUpperCase();
	}
	
	return arr.join('');
	}
	
alert (camelize("backg-roun-d-color"));