/*
2.4. Izračunati koliko komada proizvoda možemo da kupimo ako znamo koliko
para imamo na računu i koliko košta jedan proizvod.
(stanje na računu: 325 din, cena proizvoda 14 din)
*/

var Novac=325;
var Cena=14;
var kolicina=Math.floor(Novac / Cena);

console.log(kolicina);