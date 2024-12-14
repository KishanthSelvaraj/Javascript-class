// let json1 = "Dave";
// let json2 = 4;
// let json3 = true;
// let json4 = [4, 5, 6, 7];
// let json5 = {
//   Stock: "TCS",
//   Price: 3500,
// };
// let json6 = `[
//   {
//       "Stock":"TCS",
//       "Price":3500
//   },
//   {
//       "Stock":"HUL",
//       "Price":2500
//   },
//   {
//       "Stock":"SBI",
//       "Price":550
//   }
// ]`;
// console.log(json6);
// let parsed = JSON.parse(json6)
// console.log(parsed);
// console.log(JSON.stringify(parsed));

//Get , Post , Put , Delete

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json.title));

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    userId: 10,
    id: 5,
    title: "Put method",
    completed: true,
  }),
})
  .then((response) => response.json())
  .then((json) => console.log(json)); 