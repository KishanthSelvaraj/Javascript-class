//type 1
let item = {
  name: "phone",
  price: 12000,
  quantity: 1,
  categories: ["electronics", "phones"],
  dimensions: {
    length: 8,
    breadth: 2.5,
  },
};
console.log(item);

item.charger = 1;

console.log(item.charger);

//type-2
let item2 = new Object();
item2.name = "oppo";
item2.price = 30000;
item2.quantity = 2;
console.log(item2);
item2.price = 20000;
console.log(item2);

let fun={
    item:"phone",
    buy: function(){
        console.log("cart added");
    },
    sell: function(){
        console.log("sell");
    }
}
fun.buy()
fun.sell()
