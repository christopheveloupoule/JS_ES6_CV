/*let a = 1;
let b = a++ - ++a + a++;
console.log(a, b);*/

/*Result4 1
Ligne #2, b vaut 1 (mais a passe à 2 ensuite) 
- 3 (a passe à 3 immédiatement) + 3 (mais a passe à 4 juste après). 
Donc finalement, a vaut 4 et b vaut 1 -3 + 3 = 1.*/

/*let i;
for (i = 0; i < 10; i++) {
  i *= 2;
}
console.log(i)*/

/*Result : 15
Au tour #1, i vaut initialement 0 puis toujours 0 puis passe à 1. 
Au tour #2, i vaut 2 puis passe à trois. 
Au tour #3, i vaut 6 puis passe à 7.
Au tour #4, i vaut 14 puis passe à 15 mais 15 est supérieur à 10 
 et provoque la sortie de boucle donc avec la valeur 15.*/

/* function doubler(n) {
    n *= 2;
  }
  let a = 1;
  doubler(a);
  console.log(a);*/

/*Result: 1
La variable a est un entier donc un type primitif donc elle est passée par valeur.
La variable n est donc totalement indépendante et occupe une autre adresse mémoire. 
Dans ces conditions, modifier la valeur de n ne modifie en rien la valeur de a.
*/

/*function doubler(t) {
    t[0] *= 2;
  }
  let tab = [1];
  doubler(tab);
  console.log(tab[0]);*/

/*Result : 2
La variable tab est un tableau (une instance de la classe Array) donc un type objet
donc elle est passée par référence. Le symbole t pointe donc exactement vers
la même case mémoire que le symbole tab. Dans ces conditions,
modifier la valeur de t modifie la valeur de tab.
*/  

/*class Livre {
    constructor(titre = "La Peste") {
      this.titre = titre;
    }
  }
  let livre = new Livre("La Chute");
  console.log(livre.titre);*/

/*  Result: La Chute
Dans le constructeur de la classe Livre, la chaîne "La Peste" est un paramètre par défaut 
pour la propriété titre. Cette valeur n'intervient que si on construit un Livre sans titre.
Ici, la chaîne "La Chute" est passée à la propriété titre donc la valeur par défaut n'est pas utilisée.
*/

//setTimeout(console.log("ok"), 2000);

/*Result : ok
La méthode setTimeout attend une fonction (l'adresse mémoire d'une fonction) en premier paramètre. 
Ici, l'expression console.log("ok") n'est pas une fonction. JS évalue (exécute) donc cette expression 
"dans l'espoir" de recevoir une fonction en retour, ce qui provoque l'affichage de "ok".
 Finalement, la méthode log ne retourne rien. 
 En l'absence d'une fonction, setTimeout n'agit pas donc rien de plus n'a lieu après 2 secondes.
*/

//setTimeout(() => console.log("ok"), 2000);

/* Result : ok après 2s
La méthode setTimeout reçoit une fonction (une arrow-function, c'est à dire une lambda) en premier paramètre. 
Cette fonction s'exécutera après 2000 millisecondes (donc 2 secondes) et affichera "ok".
*/

/*let test = 12 == '1' + 2;
let a = test ? 1 : 2;
a += !test ? 1 : 2;
a += test && (!test) ? 1 : 2;
console.log(a);*/

/*result: 5
Ligne #1, test est évalué à true parce que JS donne priorité aux chaînes sur les nombres donc 
la concaténation l'emporte sur l'addition, le second opérande est converti en chaîne et le résultat est '12'. 
Or, l'opérateur == ne tient pas compte du type des opérandes donc la comparaison entre le nombre 12 et la chaîne '12' donne true. 
Ligne #2, a est donc évalué à 1. 
Ligne #3, cela donne a+=2 donc a vaut maintenant 3. 
Ligne #4, faire un ET entre une valeur et sa négation donne toujours false donc a augmente de 2 et passe à 5.
*/

/*let tab = [];
for (let i = 0; i < 10; i++) {
  tab[i] = i + 1;
}
for (let n of tab) {
  if (n % 2) {
    continue;
  }
  else if (n % 6 === 0) {
    break;
  }
  console.log(n);
}*/

/*Result 2 4 
La première boucle remplit tab avec les entiers de 1 à 10. 
Dans la seconde boucle, si n est impair (n%2 vaut 0 donc false !), 
on ne fait rien et on passe au suivant mais si n est impair (else) et multiple de 6 (n%6 vaut 0), on sort de la boucle.
Sinon, on affiche n. 
Donc, on affiche les entiers pairs à partir de 1 en s'arrêtant au premier multiple de 6 mais sans afficher ce dernier.
Donc on affiche 2 puis 4.
*/

/*let t1 = [1, 2, 3];
let t2 = t1;
t1.forEach(i => t1[i] *= 2);
console.log(t1, t2);*/

/* Result: [ 1, 4, 3, NaN, NaN ] [ 1, 4, 3, NaN, NaN ]
Le premier paramètre de forEach doit être une fonction comme ici. 
Mais le premier paramètre (reçu automatiquement) de cette fonction est l'item, 
pas l'indice comme utilisé ici. D'où l'affichage incohérent.
*/

/*let t1 = [1, 2, 3];
let t2 = t1;
t1.forEach((v, i) => t1[i] *= 2);
console.log(t1, t2);*/

/* Result :[ 2, 4, 6 ] [ 2, 4, 6 ]
Parce qu'un tableau est un objet, le tableau t1 est passé par référence à la variable t2 
donc t1 et t2 sont 2 identifiants distincts mais qui pointent vers la même adresse mémoire.
En conséquence, si on modifie l'un, on modifie l'autre. 
La méthode forEach reçoit une fonction (une arrow-function c'est à dire une lambda) qui s'exécute
pour chaque item du tableau t1. La lambda récupère en paramètre la valeur (v) et l'indice (i) 
mais n'utilise que l'indice pour effectivement doubler la valeur de chaque item de t1. 
Donc les items de t1 (et par conséquence de t2) sont doublés.
*/

/*let t1 = [1, 2, 3];
let t2 = [...t1];
t1.forEach((v, i) => t1[i] *= 2);
console.log(t1, t2);*/

/*Result : [ 2, 4, 6 ] [ 1, 2, 3 ]
Le tableau t2 est initialisé à partir de t1 via un spread operator donc par clonage. 
t1 et t2 sont 2 identifiants distincts pointant vers 2 adresses mémoire distinctes,
ils n'ont rien à voir ensemble si ce n'est qu'ils contiennent les mêmes valeurs.
La méthode forEach reçoit une fonction (une arrow-function c'est à dire une lambda)
qui s'exécute pour chaque item du tableau t1. 
La lambda récupère en paramètre la valeur (v) et l'indice (i) mais n'utilise que l'indice
pour effectivement doubler la valeur de chaque item de t1. Donc les items de t1 sont doublés mais pas ceux de t2.
*/

/*class Livre {
    static nb = 0;
    constructor(titre) {
      this.titre = titre;
      nb++;
    }
  }
  let laChute = new Livre("La Chute");
  let laPeste = new Livre("La Peste");
  console.log(nb);*/

/*Result : Erreur
A la ligne 5 (nb++) et à la ligne 10 (console.log(nb)), 
la variable statique nb ne peut pas être accédée directement,
elle doit l'être via la classe (Livre.nb).
*/

/*class Livre {
    static nb = 0;
    constructor(titre) {
      this.titre = titre;
      Livre.nb++;
    }
  }
  let laChute = new Livre("La Chute");
  let laPeste = new Livre("La Peste");
  console.log(Livre.nb);*/

/* Result: 2
A chaque création d'instance de la classe Livre, le constructeur incrémente la variable statique nb initialement à zéro.
Donc console.log(Livre.nb) affiche 2 après la création des 2 livres.
*/

/*new Promise(res => setTimeout(() => res('ok'), 2000))
  .then(val => console.log(val));*/

/* Result: ok apres 2"
Le constructeur de la promesse reçoit en paramètre une lambda (l'executor) qui elle même reçoit automatiquement 2 fonctions en paramètres, 
celle (res) qui se déclenche en cas de succès et celle (facultative et absente ici) qui se déclenche en cas d'échec. 
L'executor s'exécute et la lambda contenant le setTimeout déclenche la fonction res après 2 secondes en lui passant la valeur d'aboutissement "ok".
Cette valeur d'aboutissement de succès est récupérée automatiquement par la lambda (paramètre val) de la méthode then chaînée au constructeur. 
Cette lambda affiche donc "ok" après 2 secondes.
*/

/*new Promise(res => setTimeout(() => res('ok1'), 2000))
  .then(val => console.log(val));
new Promise(res => setTimeout(() => res('ok2'), 2000))
  .then(val => console.log(val));*/

/*Result: ok1ok2 (apres 2")
Les deux promesses sont créées en même temps (la seconde quelques millisecondes plus tard). 
Chaque "executor" va exécuter la lambda générant (après 2 secondes) la valeur d'aboutissement "ok1" ou "ok2" 
récupérée respectivement par chaque méthode then. 
Cela entraînera l'affichage de "ok1" après 2 secondes puis aussitôt après de "ok2" (quelques millisecondes plus tard).
*/

/*let div = document.createElement('div');
div.addEventListener('click', () => console.log('clic'));
document.body.appendChild(div);
setTimeout(() => div.click(), 2000);*/

/*Result:
Un élément DIV (HTMLDivElement) est créé puis un écouteur de clic lui est ajouté. 
Enfin l'élément est ajouté au body et un clic sur cet élément est déclenché après 2 secondes.
Ce clic artificiel déclenche la lambda de l'écouteur qui affiche donc "clic" après 2 secondes.
*/

/*let t = [1, 2, 3];
console.log(t.filter(n => n % 2));*/

/* [1, 3]
La lambda en paramètre de la méthode filter retourne true si n (reçu automatiquement) est impair (n%2 vaut 1 donc true). 
Donc, seuls sont conservés les nombres impairs 1 et 3.
*/

/*let t = [1, 2, 3];
console.log(t.map(n => n *= 2).filter(n => n % 2));*/

/* []
La méthode map a pour effet de doubler les valeurs de t qui deviennent donc toutes paires [2, 4, 6] 
puis la méthode filter ne conserve que les nombres impairs donc plus aucun.
*/

/*let t = ['a', 'b', 'c'];
console.log(t.join('-').charAt(2).toUpperCase());*/

/*Result: B
La méthode join retourne 'a-b-c' puis la méthode charAt retourne le troisième caractère (indice 2) 
donc 'b' et finalement la méthode toUpperCase le retourne en majuscule donc 'B'.
*/