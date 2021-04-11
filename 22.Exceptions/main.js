"use strict"
//console.log(n);
try {
	console.log(n);
} catch (e) {
	console.log(e.message);
}
// Limite de récursivité
function f() {
	k++;
	f();
}
let k = 0;
try {
	f();
} catch {
	console.log(k);
}
