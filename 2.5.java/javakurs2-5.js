/*
2.5. Napisati funkciju koja računa sumu prvih N prirodnih brojeva
*/

var N = Number(prompt('Unesi jedan prirodan broj:'));
var suma=0;

function SumaN(number){
	for (var i=1; i<=N; i++){
	suma += i;
}
	console.log(suma);
}

SumaN(N);