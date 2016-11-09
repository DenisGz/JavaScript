function truncate (str, maxlength){
  var n = str.length;
  if (n <= maxlength){
    return str;
  }else
  var strStr = str.slice(0,(maxlength-1)) + '…'
  return strStr;
}
  name = prompt('name?');
  length = prompt('длинна?')
	  alert(truncate(name, length));
	  