function Calculator()  {
	var methods = {
		"-": function (a, b) {
			return a - b;
		},
		"+": function (a, b) {
			return a + b;
		},
	};
this.calculate = function(str) {
var arr = str.split(' ');
	a = +arr[0];
	op = arr[1];
	b = +arr[2];
return methods[op](+a, +b);
	
};
this.addMethod = function(name, func){
	methods[name] = func;
};

};

var calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

