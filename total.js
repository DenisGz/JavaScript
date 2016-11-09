"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};
var b = 0;

for (var key in salaries){
	var a = salaries[key];
	
	b = b + a;
	
}
alert ('Total ' + b);