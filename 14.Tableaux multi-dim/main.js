"use strict"
// Multi-dimensions
let tab2D = [[10, 20, 30], [1, 2]];
console.log(tab2D[0][2]); // 30

// Parcours d'un tableau à 2 dimensions
for (const e of tab2D) { //Parcours la 1ere dimension
	for (const e2 of e) { //Parcours la 2eme dimension
		console.log(e2);
	}
}
