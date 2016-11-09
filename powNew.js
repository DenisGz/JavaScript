 alert ("start");
function powNew(a, i) {
  if (i < 0) return NaN;
  if (Math.round(i) != i) return NaN;

  var resalt = a;
  for (j=1; j<i; j++)
  
  {
    resalt *=a;
  } 
	  return resalt;
}
/*function isInteger (num)
	{
	var lightNum = num^0;
	var answer;
	if (lightNum == num && num >=1)
	{
		answer = 'true';
	}
	else answer = 'не поддерживается, введите целую степень, большую 1'
	return answer;
	}
*/
  var fst = prompt ("первое число") ;
  var snd = prompt ("второе число") ;
 /*
 if (isInteger(snd) == 'не поддерживается, введите целую степень, большую 1')
  {
	  alert ('не поддерживается, введите целую степень, большую 1');
  }
 else
 */ 
  alert (powNew(fst, snd));
  alert ("finish")
 
 
 

