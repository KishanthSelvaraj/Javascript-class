// // console.log(test);

// try {
//   // let test=10
//   console.log(test);
// } catch (err) {
//   console.log(err.name);
//   console.log(err.message);
//   // console.log(err.stack);
// }finally{
//   console.log("Done");
  
// }

function zero(input1,input2) {
  if (isNaN(input1) || isNaN(input2)) {
    throw new Error("Not a number error");
  }
  return input1/input2
}

try {
let ans=zero(5,10)
  if(ans===Infinity)
    throw new Error("Divided zero error");
 
  console.log(ans);
    
} catch (error) {
  console.log(error);
  
}finally{
  console.log("Done");
  
}