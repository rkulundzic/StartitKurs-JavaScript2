/*
2.2. Izračunati sumu prvih N prirodnih brojeva (npr. za broj 3 bi bilo 1 + 2 + 3 = 6 ).
N  je ceo nenegativan broj.
*/
var N = prompt('Unesi jedan prirodan broj:');
var suma=0;

for (var i=1; i<=N; i++){
	suma += i;
}

console.log(suma)

if (N<0){
	console.log('Unesi ceo nenegativan broj!');
}