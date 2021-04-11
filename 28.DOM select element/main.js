// Sélection du premier élément (dans le contexte du document).
let e = document.querySelector('.titre');
console.log(e.textContent); // 1
console.log(e.innerHTML);   // <strong>1</strong>
// Sélection de tous les éléments (dans le contexte du document).
let tab = document.querySelectorAll('.titre');
for (e of tab) {
	console.log(e.textContent);
}
// JS crée automatiquement une variable pour tous les éléments avec ID.
console.log(out);
// Sélection dans le contexte d'un élément.
console.log(out.querySelector('div'));
