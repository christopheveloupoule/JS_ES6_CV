"use strict"
// Rupture break
for (let n = 0; n < 10; n++) {
	if(n==5){
		break; // Sortie de boucle
	}
	console.log(n);
}
// Rupture continue
for (let n = 0; n < 10; n++) {
	if(n % 2 === 0){
		continue; // Tour suivant
	}
	console.log(n);
}

//Quizz 3:

/*Boucle sans fin:
let a = b = 0;
while (a < 100) {
  b++;
}
console.log(a, b);
*/

/*
let i = 10;
do {
  i++;
} while (i < 10);
console.log(i);
Result: 11
*/

/*
for (let n = 0; n < 5; n += 2) {
  console.log(n);
}
result: 0 2 4
*/