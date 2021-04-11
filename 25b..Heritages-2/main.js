class Stylo {}
class StyloBille extends Stylo {}

let stylo = new Stylo();
let styloBille = new StyloBille();
console.log(stylo instanceof Stylo);      // true
console.log(stylo instanceof StyloBille); // false
console.log(styloBille instanceof Stylo);      // true
console.log(styloBille instanceof StyloBille); // true
console.log(stylo);
console.log(styloBille);
console.log(stylo instanceof Object);      // true
console.log(styloBille instanceof Object); // true
console.log([] instanceof Object);         // true
