// setTimeout(()=> console.log("Async") , 3000)
// setTimeout(()=> console.log("Async2") , 4000)
// setTimeout(()=> console.log("Async3") , 2000)
// console.log("step1");
// console.log("step2");
// console.log("step3");

// setInterval(()=> console.log("Intervel") , 5000)

function time() {
  let dateTime = new Date();
  let hr = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();
  //   console.log(sec);

  if (hr > 12) {
    hr = hr - 12;
    document.getElementById("ampm").innerHTML = "PM";
  }
  document.getElementById("hours").innerHTML = zero(hr);
  document.getElementById("mins").innerHTML = zero(min);
  document.getElementById("seconds").innerHTML =zero(sec);
}

function zero(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

time();
setInterval(time, 1000);
