"use strict"
// Fonction variadique
function moy(){
	let somme = 0;
	for (let i=0; i < arguments.length; i++) {
		somme += arguments[i];
	}
	let moyenne = (somme / arguments.length) || 0;
	console.log(moyenne);
}
moy(12, 8, 13);
moy();

// Spread operator: permet de disperser le contenu d'un tableau
let notes = [12, 8, 13];
moy(...notes);
