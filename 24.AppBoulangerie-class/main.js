let bernard = new Boulanger("Bernard");
let baguette=new Produit("baguette",0.20,1.20);
let croissant=new Produit("croissant",0.25,1.50);
let painDeMie=new Produit("pain de mie",0.50,4.50);
bernard.fabriquer(baguette,80);
bernard.fabriquer(croissant,60);
bernard.fabriquer(painDeMie,20);
bernard.bilan();
