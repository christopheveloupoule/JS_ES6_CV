// Créer un élément IMG (logoJS) et l'ajouter au DIV out (à la fin) :
let logoJS = document.createElement('img');
logoJS.src = 'logo_js.png';
out.appendChild(logoJS);
// Créer un élément IMG (logoVSCode) et l'insérer avant logoJS :
let logoVSCode = document.createElement('img');
logoVSCode.src = 'logo_vscode.png';
out.insertBefore(logoVSCode, logoJS);
// Supprimer logoJS
logoJS.remove();
// Faut-il toujours passer par createElement() ?
// let img = new HTMLImageElement(); // Erreur, constructeur inexistant.
// Certain éléments comme IMG, OPTION, TR, TD... ont un constructeur :
let logo = new Image();
logo.src = 'logo_js.png';
out.insertBefore(logo, logoVSCode);
