/*
// Propriété document | window.document
console.log(document.title);
console.log(document.images);
// Propriété location | window.location
setTimeout(() => {
	location.href = "page.html";
}, 2000);
// Méthode alert() | window.alert
alert("JavaScript");
// Méthode prompt() | window.prompt
console.log(prompt("Donnez un nombre :")); // Retourne une string ou null.
// Méthode confirm() | window.confirm
console.log(confirm("Vous continuez ?!")); // Retourne true ou false.
*/
// Méthode setInterval() | window.interval
let k = 10;
let itv = setInterval(() => {
	console.log(k--);
	if(k < 0){
		clearInterval(itv); //method statique
	}
}, 1000);
// Méthode print() | window.print
print();
