"use strict"
// Passage par valeur d'un nombre
function f1(n){
	n++;
}
let n = 3;
f1(n);
console.log(n);
// Passage par référence d'un objet
function f2(tab) {
	tab[0]++;
}
let tab = [3];
f2(tab);
console.log(tab);

//Quizz 5:

/*function f(n) {
	return n++;
  }
  let a = 1;
  f(a);
  console.log(a);

/*La variable a est un entier, type non-objet donc  elle est passée par valeur
 à la variable n qui n'est donc pas stockée dans la même case mémoire. 
Ces 2 variables ne partagent rien, elles n'ont ni le même scope,
ni la même adresse mémoire ni le même cycle de vie puis que n "meure"
à l'accolade de fin de la fonction f.

Result: 1*/

/*function f(n) {
	n++;
  }
  let n = 1;
  f(n);
  console.log(n);
  
 Result: 1 */

/* Ce n'est pas parce que les deux variables ont le même nom 
qu'elles sont en relation. La variable n du programme principal est un entier, 
type non-objet donc elle est passée par valeur à la variable n de f 
qui n'est donc pas stockée dans la même case mémoire. Ces 2 variables ne partagent rien,
 elles n'ont ni le même scope, ni la même adresse mémoire ni le même cycle de vie 
 puis que le n de f "meure" à l'accolade de fin de la fonction f.*/

/* function f(n) {
	return f(n-1);
  }
  console.log(f(3)); */

/*La fonction f est récursive mais ne modifie pas sa variable n
 à chaque appel récursif donc son appel par le programme principal déclenche 
 une récursivité infinie qui se termine fatalement par une débordement 
 de la pile d'appel donc une StackOverflowError.
*/

