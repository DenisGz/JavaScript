//new Date(year, month, date, hours, minutes, seconds, ms)

var now = new Date(2012, 1, 20, 3, 12);
alert (now);

function getWeekDay(date) {
	var days = ['вс','пн','вт','ср','чт','пт','сб']
	return days[date.getDay()];
}


function getLocalDay(date) {
	var days = [7,1,2,3,4,5,6]
	return days[date.getDay()];
}

function getDateAgo (date, days){
	var dateCopy = new Date(date); 
	dateCopy.setDate(date.getDate() - days);
	return dateCopy.getDate();
}

function getLastDayOfMonth(year, month){
	var date = new Date(year, (month+1), 0);
	return date.getDate();
}

function getSecondsToday(){
	var now = new Date();
    var sec = now.getHours()*3600 + (now.getMinutes()*60) + now.getSeconds();
	var secToTomorrow = (24*3600) - sec;
	alert(now);
	alert('до завтра осталось ' + secToTomorrow + ' секунд');
	return sec;

}

function formatDate(date) {
	var d = date.getDate();
	if (d <=9){
		d = '0' + d;
	}
	var m = (date.getMonth()+1);
	if (m <=9){
		m = '0' + m;
	}
	var y = date.getFullYear() % 100;
	if (y <=9){
		y = '0' + y;
	}
	
	alert(d + '.' + m + '.' + y);
}

var date = new Date(2012,0,3);  // 3 января 2012
alert( getWeekDay(date) );      // Должно вывести 'вт'

var date = new Date(2014, 0, 3); // 3 января 2014
alert( date.toLocaleString('ru', {weekday: 'short'}) ); // 'Пт'

var date = new Date(2012, 0, 1);  // 3 янв 2012
alert( getLocalDay(date) );       // воскресенье, выведет 7

var date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 января 2015)
alert( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
alert( getDateAgo(date, 365) ); // 2, (2 января 2014)
alert(getLastDayOfMonth(2012, 1));
alert (getSecondsToday());
var d = new Date(1981, 9, 26); // 30 января 2014
formatDate(d); // '.01.14'




function formatDate(date) { 
var now = (new Date() - date)/1000;
if (now < 1) {
	var str = 'только что';
}
else if (now >= 1 && now < 60){
	str = now + ' секунд назад';
}
else if (now >=60 && now < 3600){
	str = now/60 + ' минут назад'
}
else if (now >=3600 && now < 86400){
	str = now/3600 + ' часов назад'
}
else {
	str = date
}

return str;

 }

alert( formatDate(new Date(new Date - 1)) ); // "только что"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

alert( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"
