"use strict";
function getRandomInt(min, max)
	{
	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	function getRandElem(arrr)
	{
	return arrr[getRandomInt(0, arrr.length - 1)];
	}


 var arr = ["Яблоко", "Апельсин", "Груша"];
  alert( arr[(arr.length - 1)] );

  arr.push("Компьютер");
  alert(arr);
  arr[arr.length] = 'Монитор'
  alert(arr);
  alert (getRandElem(arr));
  /*
  var styles = ['Джаз', 'Блюз'];
  alert (styles);
  styles.push('Рок-н-Ролл');
  alert (styles);
  styles[styles.length - 2] = 'Классика';
  alert (styles);
  alert (styles.shift() );
  alert (styles);
  styles.unshift('Рэп', 'Рагги');
  alert (styles);*/