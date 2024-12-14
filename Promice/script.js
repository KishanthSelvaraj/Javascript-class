// function movie() {
//   return new Promise((resolve, reject) => {
//     //success , failure
//     let movie = false;
//     if (movie) {
//       resolve(230);
//     } else {
//       reject();
//     }
//   });
// }
// //calling
// movie()
//   .then((amt) => console.log("Ticket Booked", amt))
//   .catch(() => console.log("Ticket not Booked"));

// async function fn() {
//   return "Kishanth";
// }
// fn()
//   .then((name) => console.log(name))
//   .catch((err) => console.log(err));

let input = new Promise((resolve, reject) => {
  let home = true;
  if (home) {
    setTimeout(resolve, 3000, "Kishanth Reached");
  } else {
    reject("Kishanth not Reached");
  }
});
input.then((msg) => console.log(msg)).catch((err) => console.log(err));
async function syncstatus() {
  console.log("hello");
  await input;
  console.log("Done");
}
syncstatus();