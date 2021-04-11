// Champ de saisie d'un nombre binaire.
let input = document.createElement('input');
input.addEventListener('keydown', evt => {
	console.log(evt.key);
	// Bloquer tout sauf les chiffres 0 et 1 ainsi que Backspace.
	if (evt.key !== '0' && evt.key !== '1' && evt.key !== 'Backspace')
		evt.preventDefault();
}, false);
// Bloquer le clic droit.
input.addEventListener('contextmenu', evt => evt.preventDefault(), false);
// Ajouter à l'affichage.
out.appendChild(input);
