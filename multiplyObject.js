"use strict";

 let menu = {
      width: 200,
      height: 300,
      title: "My menu"
    };
   function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
} 
    
    function multiplyNumeric(obj) {
    var a = 0;
     for (var key in obj){
       if (isNumeric(obj[key])){
       obj[key] *= 2;
      
     }
     }
    }
    multiplyNumeric(menu);
    
    alert( "menu width=" + menu.width + " height=" + menu.height + " title=" + menu.title );
