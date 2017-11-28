/*
2.3.Izračunati faktorijel zadatog broja
(faktorijel broja 5 je 1 * 2 * 3 * 4 * 5 = 120)
*/

var n = prompt('Unesi jedan broj:');
var Faktorijel=1;

for (var i=1; i<=n; i++){
	Faktorijel *= i;
}

console.log(Faktorijel);
