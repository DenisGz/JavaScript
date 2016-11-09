 alert ("start");
function fib(n) {
	  var fibo = (Math.pow((1 + Math.sqrt(5))/2, n) - Math.pow((1 - Math.sqrt(5))/2, n))/Math.sqrt(5);
  return fibo;
}
function fib2(n) {
  var a = 1,
    b = 1;
  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
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

  var n = prompt ("первое число") ;
  if (isInteger(n) == 'не поддерживается, введите целую степень, большую 1')
  {
	  alert ('не поддерживается, введите целую степень, большую 1');
  }
 else
  
  alert (fib(n));
  alert (fib2(n));
  alert ("finish")
 
 
 

