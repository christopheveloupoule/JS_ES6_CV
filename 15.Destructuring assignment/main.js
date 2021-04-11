"use strict"
// Destructuring assignment
let a, b, c;
[a, b] = [1, 2];
[a, b, c] = [3, 4];
[a, b, c = 0] = [5, 6];
[a, , c] = [7, 8, 9];
[a, b] = [b, a];

//Quizz4

/*
let t = [1, 2, 3];
for (let i = 0; i < t.length; i++) {
  t[i]++;
}
console.log(t);
Result: [2,3,4]
*/

/*
let t = [1, 2, 3];
for (let n of t) {
  n++;
}
console.log(t);
[1,2,3] : La boucle for/of parcourt chaque case du tableau t 
en donnant à la variable n la valeur d'un item à chaque tour 
mais n'a aucun moyen de modifier la valeur des items. 
L'instruction n++ n'a aucun effet sur le contenu du tableau t.
*/

/*
let t = [[1], [2, 3], []];
t[1][3] = 0;
for (let n of t[1]) {
  console.log(n);
}
Result: [2,3,undefined,0]
Après la seconde ligne, le second sous-tableau est impacté (indice 1)
 et t vaut [ [1], [2, 3, undefined, 0], [] ] parce que
 JavaScript supporte l'incomplétion et place undefined dans les "trous".
 La boucle for/of parcourt les items du second tableau (indice 1).
*/