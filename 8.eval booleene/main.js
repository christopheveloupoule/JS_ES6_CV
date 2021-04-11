"use strict"
/*
Les valeurs évaluées à FALSE :
false, undefined, NaN, null, 0, ''
*/
if (false || undefined || NaN || null || 0 || '') {
	console.log("VRAI ???");
}
// Short-circuit operators
let n = 3;
console.log(n > 5 && n < 10);
console.log(n > 5 || n < 10);
console.log(n || 0);
 
//Quizz 2 
/*
let a = -1;
let b = 0;
if (a) {
  b++;
}
if (a && a++) {
  b++;
}
if (a || a++) {
  b++;
}
if (!a && a++) {
  b++;
}
if (!a || a++) {
   b++;
}
console.log(a, b);
Result 2 3*/

/*let a = 17;
let b = 0;
if (a < 2*9) {
  b++;
}
else if (b > ++a % 2) {
  a++;
}
else {
  b++;
}
console.log(a, b);
result: 17 1*/

/*
let a = 1;
let b = 0;
switch (a) {
  case -4 + 3 :
    b += ++a;
  case 35 % 17 :
    b *= ++a;
  default :
    b = a;
}
console.log(a, b);
Result: 2  2*/