/*
2.1.Napisati kod koji će za svaki broj od 1 do 10 ispisati da li je paran ili neparan
*/

for (var i = 1; i <= 10; i++) {
	if(i%2==0){
		console.log('Broj ' + i + ' je paran.');
	}
	else{
		console.log('Broj ' + i + ' je neparan.');
	}
}
