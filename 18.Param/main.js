"use strict"
// Paramètre par défaut
function somme(a, b, c = 0) {
	return a + b + c;
}
console.log(somme(12, 8, 13));
console.log(somme(12, 8));

// Rest parameter
function moyenne(prenom, ...notes) {
	let somme = 0;
	for (let note of notes) {
		somme += note;
	}
	let moyenne = (somme / notes.length) || 0;
	console.log(prenom, moyenne);
}
moyenne("Bob", 12, 8, 13);
moyenne("Bob");
