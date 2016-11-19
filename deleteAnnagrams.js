var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
function findIndex (arr, value){
  var index = [];
  for (var i = 0; i < arr.length; i++) {
 if (arr[i] == value) {
   index.push(i);
   
 }
 }
return index;
 }


function aclean (arr){
	var sortArr = [];//массив для хранения приведенных к правильному виду сочетаний букв
	//наполнение массива
	for (var i = 0; i < arr.length; i++) {
		sortArr[i] = arr[i].toLowerCase().split('').sort().join('');
		var indArr = findIndex(sortArr, sortArr[i]); //находим номера в массиве с одинаковыми сочетаниями букв
			
	for (j=1; j < indArr.length; j++){
		arr.splice(indArr[j], 1, 5);//из основного массива убираем аннаграмы, вместо них ставим 5
	}
}
//удаляем элементы массива с пятерками
	var indArrFin = findIndex(arr, 5);
			
	for (n=0; n < indArrFin.length; n++){
		arr.splice(indArrFin[n] - n, 1);
	}
return arr;
	}


alert( aclean(arr) ); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"