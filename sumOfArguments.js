function sum() {
  var sum = 0;
  for (var i=0; i < arguments.length; i ++){
	  sum += arguments[i];
  }
  alert (sum);
}

sum();
sum(1);// = 1
sum(1, 2);// = 3
sum(1, 2, 3);// = 6
sum(1, 2, 3, 4);// = 10