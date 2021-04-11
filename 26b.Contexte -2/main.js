class C {
	constructor(min){
		this.min = min;
	}
	/*filtrerMin(tab) {
		return tab.filter(function(e){
			return e >= this.min; //erreur qui bloque JS this non utilisable avec les method filter,map,foreach...
		});
	}*/
	filtrerMin(tab) {
		return tab.filter(function(e){
			return e >= this.min;
		}, this);
	}
}

let c = new C(5);
console.log(c.filtrerMin([12, 3, 8, 4]));
