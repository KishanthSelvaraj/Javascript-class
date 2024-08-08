let json1 = "Dave";
let json2 = 4;
let json3 = true;
let json4 = [4, 5, 6, 7];
let json5 = {
  Stock: "TCS",
  Price: 3500,
};
let json6 = `[
    {
        "Stock":"TCS",
        "Price":3500
    },
    {
        "Stock":"HUL",
        "Price":2500
    },
    {
        "Stock":"SBI",
        "Price":550
    }
]`;

let parsed = JSON.parse(json6);
// console.log(parsed[1].Price)
// console.log(JSON.stringify(parsed))
//https://official-joke-api.appspot.com/jokes/programming/random

// get, post,put,delete
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json.title))
  .catch((error) => console.log(error));

fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    userId: 11,
    id: 201,
    title: "Testing",
    completed: true,
  }),
})
.then((response) => response.json())
.then((json) => console.log(json))

fetch('https://official-joke-api.appspot.com/jokes/programming/random')
