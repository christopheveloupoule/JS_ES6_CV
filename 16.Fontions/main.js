"use strict"
function bravo(prenom, points) {
	console.log(`Bravo ${prenom}, vous avez gagné ${points} points !`);
	return Math.round(Math.random() * 100);
}

let bonus = bravo("Bob", 50);
console.log(`Vous avez un bonus de ${bonus}`)
