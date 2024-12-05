/*
concat
length
toUpperCase()
toLowerCase()
trim()
trimStart()
trimEnd()
replaceAll()
substring()
slice()
substr()
charAt()
charCodeAt()
indexOf()
lastIndexOf()
search()
startsWith()
endsWith()
*/
let a = "Hello";
let b = "Kishanth";

// concat
console.log(a.concat(b));
// Output: HelloKishantha

// length
console.log(b.length);
// Output: 5

// toUpperCase()
console.log(a.toUpperCase());
// Output: HELLO

// toLowerCase()
console.log(a.toLowerCase());
// Output: hello

// trim()
let c = "  Hello World  ";
console.log(c.trim());
// Output: Hello World

// trimStart()
console.log(c.trimStart());
// Output: Hello World  

// trimEnd()
console.log(c.trimEnd());
// Output:   Hello World

// replaceAll()
console.log(a.replaceAll('l', 'a'));
// Output: Hexxo

// substring()
console.log(b.substring(0, 2));
// Output: Kish

// slice()
console.log(b.slice(5));
// Output: kishanth

// charAt()
console.log(b.charAt(8));
// Output: e

// charCodeAt()
console.log(b.charCodeAt(1));
// Output: 101

// indexOf()
console.log(a.indexOf('l'));
// Output: 2

// lastIndexOf()
console.log(a.lastIndexOf('l'));
// Output: 3

// search()
console.log(b.search('isa'));
// Output: 2

// startsWith()
console.log(a.startsWith('k'));
// Output: true

// endsWith()
console.log(b.endsWith('h'));
// Output: true
