function makeBuffer() {
  var text = '';

  // возвращаемся к функции
  function counter(piece) {
	   if (arguments.length == 0){
		   return text;
	   }
	   text +=piece;
	   
    };
/*
   ...и добавляем ей методы!
  counter.set = function(value) {
    currentCount = value;
  };*/

  counter.clear = function() {
    text = '';
  };

  return counter;
};

var buffer = makeBuffer();
// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

var buffer2 = makeBuffer();
// добавить значения к буферу
buffer2('Зя');
buffer2(' Исьзовать');
alert( buffer2() )
buffer2(' Нyно!');

// получить текущее значение
alert( buffer() ); // Замыкания Использовать Нужно!
alert( buffer2() );
buffer.clear();
alert( buffer() );
alert( buffer2() );