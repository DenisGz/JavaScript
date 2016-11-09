function ucFirst (str){
        var fst = str.charAt(0);
        fsst = fst.toUpperCase();
        var n = str.length;
		var snd = fsst;
        
        for (i=1; i<=n; i++){
			
          snd = snd + str.charAt(i);
        }
        return snd;
      }
	  name = prompt('name?');
	  alert(ucFirst(name));