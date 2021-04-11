console.log("Toto aime Lulu".length); // 14
console.log("Toto aime Lulu".charAt(6)); // "i"
console.log("Toto aime Lulu".indexOf("aime")); // 5
console.log("Toto aime Lulu".indexOf("AIME")); // -1
console.log("Toto aime Lulu".split(' ')); // ["Toto", "aime", "Lulu"]
console.log("Toto aime Lulu".substr(5)); // "aime Lulu"
console.log("Toto aime Lulu".substr(5, 4)); // "aime"
console.log("Toto aime Lulu".toUpperCase()); // "TOTO AIME LULU"
// Ne pas employer le constructeur String() !
let s1 = "Toto";
let s2 = new String("Toto");
console.log(s1 == s2);  // true
console.log(s1 === s2); // false
console.log(typeof s1);  // string (type primitif)
console.log(typeof s2);  // object (instance de String)
