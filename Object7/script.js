//type 1
let items = {
  name: "phone",
  price: 12000,
  categories: ["electronics", "phone"],
  dimensions: {
    length: 8,
    breadth: 2.5,
  },
  buy: function(){
    console.log("Cart added");
    
  }
};
items.charger = [1, 2];
// console.log(items.charger[1]);
// type 2
let items2 = new Object();
items2.name = "kishanth";
items.buy()
