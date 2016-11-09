function checkSpam (str){
        str = str.toUpperCase();
  var spamOne = str.indexOf("VIAGRA");
  var spamTwo = str.indexOf("XXX");
  if (spamOne >= 0 || spamTwo >= 0){
    return true;
  } return false;
      }
	  
function checkSpamTwo (str)	{ 
str = str.toUpperCase(); 
if (~str.indexOf("VIAGRA") || ~str.indexOf("XXX")) {
return true;
}return false;
}
	  name = prompt('name?');
	  alert(checkSpam(name));
	  alert(checkSpamTwo(name));
	  