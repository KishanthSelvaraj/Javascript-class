// function movie() {
//   return new Promise((resolve, reject) => {
//     let movie = true;
//     if (movie) {
//       setTimeout(resolve, 2000, 150);
//     } else {
//       reject();
//     }
//   });
// }

// movie()
//   .then((amt) => console.log("Ticket Booked", amt))
//   .catch(() => console.log("Ticket not booked"));

// let input1 = new Promise((resolve, reject) => {
//   const reach = false;
//   if (reach) {
//     resolve("Kishanth Reached");
//   } else {
//     reject("Kishanth Not Reached");
//   }
// });

// let input3 = new Promise((resolve, reject) => {
//   const reach = true;
//   if (reach) {
//     resolve("Siva Reached");
//   } else {
//     reject("Siva Not Reached");
//   }
// });

// Promise.allSettled([input1, input2, input3])
//   .then((mes) => console.log(mes))
//   .catch((error) => console.log(error));

// async function fn(){
//   return "kishanth"
// }
// console.log(fn())
// fn().then((msg)=>console.log(msg))

let input2 = new Promise((resolve, reject) => {
  const reach = true;
  if (reach) {
    setTimeout(resolve, 2000, "Gavas Reached");
  } else {
    reject("Gavas Not Reached");
  }
});
// input2.then((msg) => console.log(msg)).catch((err) => console.log(err));
async function asyncstatus() {
  console.log("hi");
  res = await input2
  console.log(res)
  console.log("done");
  
  
}

asyncstatus()