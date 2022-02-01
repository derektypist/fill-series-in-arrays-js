// Set Up Variable
let txt = "";

// Set Up Arrays
let natural = (e,i) => Array(e).fill(0).map((i) => i+1);
let squares = (e,i) => Array(e).fill(0).map((i) => i**2);
let cubes =  (e,i) =>Array(e).fill(0).map((i) => i**3);
let random = Array(10).fill(0).map((i) => Math.floor(Math.random()*100)+1);
let multOf3and5 = Array(16).fill(false).map((i) => i%3==0 || i%5 == 0 ? true : false);

// Build the text
txt += `Natural Numbers: ${natural(10,1)} <br>`;
txt += `Square Numbers: ${squares(10,1)} <br>`;
txt += `Cube Numbers: ${cubes(10,1)} <br>`;
txt += `Random Numbers: ${random} <br>`;
txt += `Multiples of 3 and 5: ${multOf3and5} <br>`;

// Display Text in the Browser
document.getElementById('demo').innerHTML = txt;