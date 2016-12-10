var calculator = {

read: function() {
	
		this.a = +prompt('first digit?', 0);
		this.b = +prompt('second digit?', 0);
	
},
 
sum: function() {
	return this.a + this.b;
},
mul: function() {
	return this.a * this.b;
}

};

calculator.read();
alert (calculator.sum());
alert( calculator.mul() );
