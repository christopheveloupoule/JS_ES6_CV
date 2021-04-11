class Boulanger {
	constructor(prenom) {
		this.prenom = prenom;
		this.fabrications = [];
		console.log(`${this.prenom} est un boulanger`);
	}
	fabriquer(produit, quantite) {
		this.fabrications.push(new Fabrication(produit, quantite));
		console.log(`${this.prenom} fabrique ${quantite} ${produit.nom}`);
	}
	bilan() {
		console.log(`Fabrications de ${this.prenom} :`);
		for (let fabrication of this.fabrications) {
			console.log(`  ${fabrication.quantite} ${fabrication.produit.nom}`);
		}
	}
}
