let btn = document.getElementById("btn");
let colortext = document.getElementById("color");
let wrap = document.getElementById("wrap");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", Color);
function Color() {
  let hex = "#";
  for (i = 0; i < 6; i++) {
    hex = hex + randomValue();
  }
  colortext.innerHTML = hex;
  wrap.style.backgroundColor = hex;
}

function randomValue() {
  let randomValue = Math.floor(Math.random() * 16);

  return hex[randomValue];
}
console.log(randomValue());
