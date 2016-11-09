function filterRange (arr, min, max) {
  var filtered = [];
  for (var i=0; i < arr.length; i++) {
    if (arr[i] >= min && arr[i] <= max) {
    filtered.push(arr[i]);
      
    }
    
  }
  return filtered;
}

var arr = [1, 2, 3, 4, 5];
alert (filterRange(arr, 1, 3));