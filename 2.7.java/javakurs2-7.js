/*
2.7. Napisati funkciju koja računa koliko komada proizvoda možemo da kupimo ako
znamo koliko para imamo na računu i koliko košta jedan proizvod.
*/

var novac = Number(prompt('Unesi količinu novca kojim raspolažeš:'));
var cena = Number(prompt('Unesi cenu proizvoda koji želiš da kupiš:'));
var kolicina = 0;

function Kupovina(a, b){
	var kolicina=Math.floor(a/b);
	console.log(kolicina);
}

Kupovina(novac,cena);