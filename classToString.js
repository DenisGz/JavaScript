var obj = {
  className: 'open menu'
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


function addClass (obj, cls) {
	var str = obj.className;
	var arr = str.split(' ');
	//return find (arr, cls);
	if (find (arr, cls) >= 0) 
	{
	return obj.className;	
	} else {
	arr.push(cls);
	var string = arr.join(' ');	
    obj.className = string;
	return obj.className;		
	}
	 
}
alert(addClass(obj, 'new')); // obj.className='open menu new'

alert(addClass(obj, 'open')); // без изменений (класс уже существует)
alert(addClass(obj, 'me')); // obj.className='open menu new me'

alert( obj.className ); // "open menu new me"