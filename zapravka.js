var bak = 53;
var bakOst=[];
bakOst[0]= prompt('Сколько бензина в баке, %?', 62);
var probeg = [];
probeg[0] = prompt('Пробег сейчас, км?', 17651);
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