let logo = 'js';
function clic(evt){
	console.log(evt);
	logo = logo == 'js' ? 'vscode' : 'js';
	evt.target.src = `logo_${logo}.png`;
}