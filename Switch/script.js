/*
'Chennai': population = 4646732
           literacyRate = 90.20
           language = 'Tamil'
'Bengaluru':population = 8443675
            literacyRate = 88.71
            language = 'Kannada'
'Mumbai':population = 12442373
        literacyRate = 89.73
        language = 'Marathi'
'Delhi': population = 16787941
         literacyRate = 86.20
         language = 'Hindi'
The Indian city of Bengaluru has a population of 8443675. Language spoken is Kannada and literacy rate is 88.71%.
*/


const button = document.querySelector("button")

let resultdiv = document.createElement('div')
resultdiv.id='result'

document.getElementById("wrapper").appendChild(resultdiv)

button.addEventListener('click',stats)
function stats(){

const input = document.getElementById("input");
const city = input.options[input.selectedIndex].value;

let population = 0,
  literacyRate = 0,
  language = "";

switch (city) {
  case "Bengaluru":
    population = 8443675;
    literacyRate = 88.71;
    language = "Kannada";
    console.log("bengaluru");
    break;
  case "Chennai":
    population = 4646732;
    literacyRate = 90.2;
    language = "Tamil";
    console.log("Chennai");

    break;
  case "Mumbai":
    population = 12442373;
    literacyRate = 89.73;
    language = "Marathi";
    console.log("Mumbai");

    break;
  case "Delhi":
    population = 16787941;
    literacyRate = 86.2;
    language = "Hindi";
    console.log("Delhi");

    break;
} 
let output = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}.`


document.getElementById("result").innerHTML = output
}