var bak = 53;
var bakOst=[62.5*0.53,62*0.53,50*0.53,48*0.53,37.5*0.53,17*0.53,1*0.53];
var info = [];
//bakOst[0]= prompt('Сколько бензина в баке, %?', 62);
var probeg = [17644,17651,17680,17700,17765,17835,17955];
//probeg[0] = prompt('Пробег сейчас, км?', 17651);
function Trip(gazolineRate, distance, gazoline) {
	this.rate = (gazolineRate/distance)*100;
	this.tankRenew = bak - gazoline;
	this.futureTrip = (gazoline/this.rate)*100;
	
}
for (i=0; i<(bakOst.length - 1); i++) {
	var a = new Trip((bakOst[i] - bakOst[i+1]), (probeg[i+1] - probeg[i]), bakOst[i+1]);
	a.rateAll = (bakOst[0] - bakOst[i+1])*100/(probeg[i+1] - probeg[0]);
	a.futureTripAll = bakOst[i+1]*100/a.rateAll;
	info.push(a)
}

//подумать как реализовать заправку
var b = info[3];
var c = info[2];
var d = info[0];

/*
var bakOstLitr = bak*bakOst/100;
var bakRenew = Math.round((bak - bakOstLitr)*100)/100;
alert ('Сейчас у вас в баке ' + bakOstLitr + ' литров, до полного бака вам нужно заправить ' + bakRenew);


probeg[1] = prompt('Пробег сейчас, км?', 17998);
bakOst[1]= prompt('сколько бензина в баке, %?', 1);
var rashod = [];
rashod[0] =Math.round(((((bakOst[0] - bakOst[1])*0.53) / (probeg[1] - probeg[0]))*100)*100)/100;

alert ('Ваш расход сейчас ' + rashod[0] + ' литров на 100 км.' + ' До полного бака вам нужно залить ' 
+ (53 - bakOst[1]*0.53) + 'литров. Остаток в баке ' + (bakOst[1]*0.53).toFixed(2) + ' литров. Оставшегося бензина вам хватит на ' + 
((bakOst[1]*53)/rashod[0]).toFixed(1) + ' км.');
*/