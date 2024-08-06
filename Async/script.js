setTimeout(() => console.log("step1"), 3000);
console.log("step1---");
console.log("step2---");
console.log("step3---");

setTimeout(() => console.log("step2"), 1000);
setTimeout(() => console.log("step3"), 2000);

setInterval(() => {
  console.log("hello");
}, 2000);

let ampm = document.getElementById("ampm");
function time() {
  let dateTime = new Date();
  let hr = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();
  console.log(hr, min, sec);
  if (hr > 12) {
    hr = hr - 12;
    ampm.innerHTML = "PM";
  }
  document.getElementById("hours").innerHTML = zero(hr);
  document.getElementById("mins").innerHTML = zero(min);
  document.getElementById("seconds").innerHTML = zero(sec);
}

function zero(num){
    if (num<10) {
        return "0"+num
    }else{
        return num
    }
}

time();
setInterval(time, 1000);
