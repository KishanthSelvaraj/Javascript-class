// for , while , do while ,for of

// for( initial ; condition ; increment/decrement )

for (i = 0; i <= 10; i++) {
  if (i % 2 == 0){
    continue
  }
   console.log(i);
}

//while(condition)
// console.log("hello");
let a = 1;
while (a !== 10) {
  if (a == 8) {
    // console.log('break',a);
    break;
  }
  //   console.log(a);
  a++;
}

// `do{

// }while(condition)`
let b = 1;
do {
  // console.log(b);
  b++;
} while (b !== 10);

let array = ["kishanth", "kavya", "gavaskar"];
// console.log(array[1]);

for (i = 0; i < array.length; i++) {
  //   console.log(array[i]);
}

//for of
for (let name of array) {
  // console.log(name);
}

const numbers = [
  34, 7, 23, 32, 5, 62, 45, 98, 31, 67, 89, 54, 21, 75, 14, 82, 43, 90, 27, 16,
];
for (let num of numbers) {
  // console.log(num);
}

// while (true) {
//   let num = Number(prompt("Enter the Number"));
//   if (!isNaN(num)) {
//     break;
//   }
// }

let c=[],d=[]
for(let num of numbers){
    if(num%2==0){
        c.push(num)
    }
    else{
        d.push(num)
    }
}
console.log(c);
console.log(d);
