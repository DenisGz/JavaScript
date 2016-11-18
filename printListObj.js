var list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

function printListC(list) {
  var tmp = list;

  while (tmp) {
    alert( tmp.value );
    tmp = tmp.next;
  }

}
printListC(list);
function printListR(list){
  alert( list.value ); // (1)

  if (list.next) {
    printListR(list.next); // (2)
  }

}

printListR(list);

function printReverseListR(list) {

  if (list.next) {
    printReverseListR(list.next);
  }

  alert( list.value );
}

printReverseListR(list);

function printReverseList(list) {
  var arr = [];
  var tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (var i = arr.length - 1; i >= 0; i--) {
    alert( arr[i] );
  }
}

printReverseList(list);