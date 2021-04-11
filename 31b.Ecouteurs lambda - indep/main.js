let logo = 'js';
let img = out.querySelector('img');

function clic(evt) {
	logo = logo == 'js' ? 'vscode' : 'js';
	evt.target.src = `logo_${logo}.png`;
}
img.addEventListener('click', clic, false);

setTimeout(() => {
	console.log("C'est fini !");
	img.removeEventListener('click', clic, false);
}, 5000);
