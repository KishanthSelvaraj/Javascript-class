
// let test 


// try {
//   console.log(test);
// } catch (err) {
//   console.log(err.name);
//   console.log(err.message);
// }finally{
//     console.log("done")
// }

try {
  let b=1;
  let ans = 5 / b;
  if(b==0){
    throw "give the valid num"
  }
  console.log(ans);
  
} catch (err) {
  console.log(err);
} 