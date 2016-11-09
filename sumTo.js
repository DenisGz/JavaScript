 alert ("start");
function sumTo(a) {
  if (a != 1)
  {
    return + a + sumTo(a-1);
  } else
	  return a;
}
function isInteger (num)
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

  var fst = prompt ("первое число") ;
  if (isInteger(fst) == 'не поддерживается, введите целую степень, большую 1')
  {
	  alert ('не поддерживается, введите целую степень, большую 1');
  }
 else
  
  alert (sumTo(fst));
  alert ("finish")
 
 
 

