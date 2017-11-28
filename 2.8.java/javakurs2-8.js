/*
Napisati funkciju koja izračunava zbir svih celih brojeva u zadatom opsegu N i K,
pri čemu je N uvek manje od K. N i K mogu biti i negativni.
*/

var n = Number(prompt('Unesi neki celi broj:'));
var k = Number(prompt('Unesi drugi celi broj, ali manji od prvog zadatog:'));
var sumaNK = 0;

function SumaNK(a, b){
	if(a<b){
		for (var i=a; i<=b; i++){
			sumaNK += i;
		}
		console.log(sumaNK);
	}
	else{
		console.log('Pogrešan Unos!');
	}
}

SumaNK(n,k);