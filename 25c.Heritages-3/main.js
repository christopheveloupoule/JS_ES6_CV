class Stylo {
	constructor(marque) {
		this.marque = marque;
	}
	toString() {
		return `Stylo ${this.marque}`;
	}
}

let stylo = new Stylo("Bic");
console.log(stylo); // Pris en charge par la console
console.log(stylo.toString()); // Appel explicite de toString() : stylo bic
console.log('' + stylo);			 // Appel implicite de toString()
