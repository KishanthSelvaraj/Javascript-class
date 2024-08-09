let select = document.querySelectorAll(".currency");
let btn = document.getElementById("btn");
let input = document.getElementById("input");
fetch("https://api.frankfurter.app/currencies")
  .then((res) => res.json())
  .then((res) => disDropdown(res));

function disDropdown(res) {
  let curr = Object.entries(res);

  for (let i = 0; i < curr.length; i++) {
    // console.log(curr[i][0]);

    let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`;
    select[0].innerHTML += opt;
    select[1].innerHTML += opt;
  }
}

btn.addEventListener("click", () => {
  let curr1 = select[0].value;
  let curr2 = select[1].value;
  let inputVal = input.value;
  if (curr1 === curr2) {
    alert("choose different currencies");
  } else {
    convert(curr1, curr2, inputVal);
  }
});
function convert(curr1, curr2, inputVal) {
  console.log(curr1, curr2, inputVal);
  const host = "api.frankfurter.app";
  fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
    .then((resp) => resp.json())
    .then((data) => {
      let final = Object.values(data.rates)[0];
      document.getElementById("result").value = final;
    });
}
