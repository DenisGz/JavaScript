function find (arr, value){
  var a = 0;
  for (var i = 0; i < arr.length; i++) {
 if (arr[i] == value) {
   return i ;  
 }
 }
 return -1;
 }

var arr = [1, 2, 3, "test"];

alert (find (arr, '3'));
alert (find (arr, '4'));
alert (find (arr, '2'));
alert (find (arr, '1'));
alert (find (arr, 'test'));