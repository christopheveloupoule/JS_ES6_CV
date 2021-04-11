let tab = [4, 2, 1, 3];
console.log(tab.length); // 4
tab.pop(); // Extraire de la fin
console.log(tab); // [4, 2, 1]
tab.push(3); // Ajouter à la fin
console.log(tab); // [4, 2, 1, 3]
tab.shift(); // Extraire du début
console.log(tab); // [2, 1, 3]
tab.unshift(4); // Ajouter au début
console.log(tab); // [4, 2, 1, 3]
console.log(tab.join('-')); // "4-2-1-3"
tab.sort(); // Trier
console.log(tab); // [1, 2, 3, 4]
// Parcourir avec forEach()
tab.forEach(function(e){
	console.log(e);
});
// Traiter avec map()
let tab2 = tab.map(function(e){
	return e * 2;
});
console.log(tab2);
// Filtrer avec filter()
let tab3 = tab.filter(function (e) {
	return e % 3 === 0;
});
console.log(tab3);
