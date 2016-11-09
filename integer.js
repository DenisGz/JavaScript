alert ("start");
function isInteger (num)
	{
	var lightNum = num^0;
	var answer;
	if (lightNum == num)
	{
		answer = 'true';
	}
	else answer = 'false'
	return answer;
	}
num = prompt ("Введите число");
alert (isInteger(num));
alert ("finish");

