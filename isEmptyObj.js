function isEmpty(obj){
var counter = 0;

for (var key in obj) {
  counter++;
}
  if (counter == 0){
    return true;
  } else 
  return false;
}




user = {};
user.name = "Вася";
user.surname = "Петров";
user.name = "Сергей";
alert (isEmpty(user));

delete user.name ;
delete user.surname ;
alert (isEmpty(user));
