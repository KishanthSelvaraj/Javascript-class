function movie() {
  return new Promise((resolve, reject) => {
    let movie = true;
    if (movie) {
      setTimeout(resolve, 2000, 150);
    } else {
      reject();
    }
  });
}

movie()
  .then((amt) => console.log("Ticket Booked", amt))
  .catch(() => console.log("Ticket not booked"));

let input1 = new Promise((resolve, reject) => {
  const reach = false;
  if (reach) {
    resolve("Kishanth Reached");
  } else {
    reject("Kishanth Not Reached");
  }
});
let input2 = new Promise((resolve, reject) => {
  const reach = true;
  if (reach) {
    resolve("Gavas Reached");
  } else {
    reject("Gavas Not Reached");
  }
});
let input3 = new Promise((resolve, reject) => {
  const reach = true;
  if (reach) {
    resolve("Siva Reached");
  } else {
    reject("Siva Not Reached");
  }
});

Promise.allSettled([input1, input2, input3])
  .then((mes) => console.log(mes))
  .catch((error) => console.log(error));
