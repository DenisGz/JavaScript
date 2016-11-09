function newArray (d){
	var arr =[];
	for (var i = 0; i <d-1; i++) {
		arr.push(i+2)
	}
	return arr;
}

function find (arr, value){
  var a = 0;
  for (var i = 0; i < arr.length; i++) {
 if (arr[i] == value) {
   return i ;  
 }
 }
 return -1;
 }
 /*
function clearTwo (arrr){
	for (var i = 2; i <(arrr.length/2 + 1); i++){
     arrr[find (arrr,i*2)] = 0;
	}
	return arrr;
}
*/
function clearZero (arr) {
	var clear = [];
	for (var i = 0; i < (arr.length); i++){
		if (arr[i] > 0){
			clear.push (arr[i]);
		}
	}
	return clear;
}
function clearIndex (arr) {
	for (var i = 2; i*i < (arr.length + 1); i++){
		for (j = 2; j < (arr.length/i + 1); j++){
			arr[find (arr, i*j)] = 0
		}
	}
	return arr;
}
function summMassive (arr){
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}

return sum;
}

d = prompt ('введите длинну массива');
alert (newArray(d));
alert (clearIndex(newArray(d)));
alert (clearZero(clearIndex(newArray(d))));
alert (summMassive(clearZero(clearIndex(newArray(d)))));
