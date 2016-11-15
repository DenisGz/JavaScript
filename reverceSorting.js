function compareNumeric(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
}
var arr = [5, 2, 1, -10, 8];

arr.sort(compareNumeric);

alert (arr);

