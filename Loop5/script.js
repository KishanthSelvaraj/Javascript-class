// for , while , do while ,for of

// for( initial ; condition ; increment/decrement )

for (i = 0; i < 10; i++) {
  if (i== 6) {
    continue;
  }
  // console.log(i);
}
console.log("while loop----------------------");

// while(condition){

// }
let a=1;
while(a < 10){
  if(a==8){
    break
  }
  console.log(a);
  a++;
}

console.log("do while-----------------------------");

//do{

// }while(condition)
let b=1;
do{
  console.log(b);
  b++;
  
}while(b == 10)

let array=["Kishanth","Gavaskar","Kavya","Sabari"]
for (i = 0; i < array.length; i++) {
  console.log(array[i]);
  
}
let number=["12","13","14","15"]
for (let i of number){
  console.log(i);
  
}



        //Map
        // let marks = [60, 80, 90]

        // let per = marks.map(x => x / 2)
        // console.log(per);

        // let users = [//array of objects
        //     { name: "kishanth", age: 20 },
        //     { name: "gavskar", age: 25 },
        //     { name: "kavya", age: 21 }
        // ]

        // let name = users.map(x => x.age)
        // console.log(name);

        // //filter
        // let numarr = [20, 40, 60, 80, 90, 100, 302, 46]

        // let filter = numarr.filter(x => x > 70)
        // console.log(filter);

        // //reduce
        // //reduce(function(accumulator, currentValue ,CurrentIndex , Array))

        // let total = numarr.reduce((acc, cur) => acc + cur,1000)
        // console.log(total);

        // //2 dimentional array
        // let arr2d = [
        //     ["a", "b", "c"],
        //     ["c", "d", "f"],
        //     ["d", "f", "g"],
        // ]
        // console.log(arr2d.flat());

        // // {a:1,b:1,c:2,d:2...}
        // let res={'a':1,'b':1}
        // res['c']=2
        // console.log(res['d']);
        // // console.log(res);

        // let answer=arr2d.flat().reduce((acc,cur)=>{
        //     if(acc[cur]){
        //         acc[cur]++
        //     }else{
        //         acc[cur]=1
        //     }
        //     // console.log(acc,cur,ind);
        //     return acc
        // },{})
        // console.log(answer);