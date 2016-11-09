"use strict";

var salaries = {
  "Вася": 600,
  "Петя": 300,
  "Даша": 350
};
var max = 0;
var maxName = "";
for (var name in salaries) {
  if (max < salaries[name]) {
    max = salaries[name];
    maxName = name;
  }
}

alert( maxName || "нет сотрудников" );