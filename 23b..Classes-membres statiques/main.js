// Membres statiques
class Stylo {
	constructor(marque) {
		this.marque = marque;
		if (Stylo.nb === undefined) {
			Stylo.nb = 0;
		}
		Stylo.nb++;
	}
	ecrire() {
		console.log(`Le stylo ${this.marque} écrit`);
	}
	static denombrer() { // method static, on ne peut avoir le mot clé "this"
		console.log(`Il y a ${Stylo.nb} stylos`);
	};
}
// Programme principal
new Stylo("Bic");
new Stylo("Pentel");
new Stylo("Waterman");
console.log(Stylo.nb);
Stylo.denombrer();
