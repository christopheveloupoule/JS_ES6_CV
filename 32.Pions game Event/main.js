// Créer le pion.
let pion = document.createElement('img');
pion.src = 'pion.png';
// Créer la cage avec un élément TABLE.
let cage = document.createElement('table');
cage.style.cssText = "border: 2px solid; border-collapse: collapse";
// Boucle des rangées.
for (let x = 0; x < 5; x++) {
	// Créer chaque rangée.
	let tr = cage.insertRow();
	// Boucle des cellules de chaque rangée.
	for (let y = 0; y < 5; y++) {
		// Créer chaque cellule.
		let td = tr.insertCell();
		td.style.cssText = "border: 1px solid; width: 100px; height: 100px; font-size: 0";
	}
}
// Positionner le pion initialement au centre.
let x = y = 2;
cage.rows[x].cells[y].appendChild(pion);
// Afficher la cage.
out.appendChild(cage);
// Ecouter les saisies clavier.
window.addEventListener('keydown', evt => {
	console.log(evt.key);
	// Modifier les coordonnées x,y en fonction de la flèche pressée.
	if (evt.key === 'ArrowUp' && x > 0) x--;
	else if (evt.key === 'ArrowRight' && y < 4) y++;
	else if (evt.key === 'ArrowDown' && x < 4) x++;
	else if (evt.key === 'ArrowLeft' && y > 0) y--;
	// Mettre à jour la position du pion.
	cage.rows[x].cells[y].appendChild(pion);
}, false);
