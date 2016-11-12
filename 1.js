function findIndex (arr, value){
  var a = 0;
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
	return findIndex(arr, '-');
	
	}
	
alert (camelize("backg-roun-d-color"));