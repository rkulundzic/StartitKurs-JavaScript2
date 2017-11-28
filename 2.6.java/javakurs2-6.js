/*
2.6. Napisati funkciju koja racuna faktorijel zadatog broja
*/

var n = Number(prompt('Unesi neki broj:'));
var faktorijel=1;

function Faktorijel(number){
	for (var i=1; i<=n; i++){
		faktorijel *= i;
}
	console.log(faktorijel);
}

Faktorijel(n);