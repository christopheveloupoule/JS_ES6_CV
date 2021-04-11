class C {
	constructor(message) {
		this.message = message;
	}
	afficher(delai) {
		//console.log(this);
		setTimeout(() => console.log(this.message), delai * 1000);
	}
}

let c = new C("OK");
c.afficher(2);
