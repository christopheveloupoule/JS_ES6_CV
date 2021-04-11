class Stylo {
	constructor(marque) {
		this.marque = marque;
	}
	ecrire() {
		console.log(`Le stylo ${this.marque} écrit`);
	}
}
class StyloBille extends Stylo {
	constructor(marque, couleur) {
		super(marque);
		this.couleur = couleur;
	}
	// Redéfinition (Override)
	ecrire(){
		super.ecrire();
		console.log(`Le stylo ${this.marque} ${this.couleur} écrit`);
	}
	fuir() {
		console.log(`Le stylo ${this.marque} ${this.couleur} fuit`);
	}
}
// Programme principal
let styloBille = new StyloBille("Bic", "rouge");
styloBille.ecrire();
styloBille.fuir();
