"use strict"
/*
Factorielle :
0! = 1
1! = 1 * 0! = 1
2! = 2 * 1! = 2
3! = 3 * 2! = 6
4! = 4 * 3! = 24
n! = n * (n-1)!
*/
// Récursivité
function facto(n) {
	if (n == 0) {
		return 1;
	}
	return n * facto(n - 1);
}
console.log(facto(10));
