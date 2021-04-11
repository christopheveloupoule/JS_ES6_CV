/*out.textContent = "Toto aime Lulu";
// Accès à UNE propriété CSS (AVEC camelCase)
out.style.fontSize = "30px";
// Accès à PLUSIEURS propriétés CSS (SANS camelCase)
out.style.cssText = "color: blue; font-size: 50px";
// Suppression de propriétés
out.style.color = null;
// Accès aux classes (méthodes variadiques)
out.classList.add("titre", "fond");
out.classList.remove("fond");
*/
//Quizz6:

/*function f(message) {
    console.log(message);
  }
  setTimeout(f('ok'), 2000);*/

  /*Parce que f('ok') n'est pas une fonction mais le résultat d'une fonction...
   donc JavaScript l'exécute immédiatement pour l'évaluer. Après 2 secondes, 
   le résultat de la fonction (undefined) est exécuté et ne provoque donc aucun effet.
  */


  /* function f() {
    console.log('ok');
  }
  setTimeout(f, 2000);*/

  /*JavaScript exécute la fonction f après 2000 millisecondes 
donc 'ok' s'affiche après 2 secondes. */

/*
Quelle méthode supprime un élément du DOM ? remove
*/