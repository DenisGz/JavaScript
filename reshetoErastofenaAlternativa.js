//шаг 1
var arr = [];
var d = prompt ('Длинна массива?');
for (var i = 2; i < d; i++) {
  arr[i] = true
}

// шаг 2
var p = 2;

do {
  // шаг 3
  for (i = 2 * p; i < d; i += p) {
    arr[i] = false;
  }

  // шаг 4
  for (i = p + 1; i < d; i++) {
    if (arr[i]) break;
  }

  p = i;
} while (p * p < d); // шаг 5

// шаг 6 (готово)
// посчитать сумму
var sum = 0;
for (i = 0; i < arr.length; i++) {
  if (arr[i]) {
    sum += i;
  }
}

alert( sum );
alert (arr);