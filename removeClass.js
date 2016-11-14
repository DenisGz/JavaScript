var obj = {
  className: 'open menu open'
}
function findIndex (arr, value){
  var index = [];
  for (var i = 0; i < arr.length; i++) {
 if (arr[i] == value) {
   index.push(i);
   
 }
 }
return index;
 }

function removeClass (obj, cls){
	var str = obj.className;
	var arr = str.split(' ');
	var index = findIndex (arr, cls);
	if (index[0] >=0) 
	{
	for (i = 0; i < index.length; i++){
	arr.splice((index[i] - i), 1);	
	}
    obj.className = arr.join(' ');
	return obj.className;		
	} else {
		return obj.className;
		
	
}
 
 
}
alert(removeClass(obj, 'new')); // obj.className='open menu new'

alert(removeClass(obj, 'open')); // без изменений (класс уже существует)
alert(removeClass(obj, 'me')); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"