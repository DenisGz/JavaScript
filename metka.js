 alert ("start");
var a = prompt('Задайте длинну интервала', 10) ;
nextPrime:
for (i=2; i<a; i++)
	{
		for (j=2; j<i; j++)
		{
			if (i % j == 0) continue nextPrime;

		}
		alert (i);
	}


alert ("finish");

