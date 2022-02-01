// Set Up Variable
let txt = "";

// Set Up Arrays
let natural = (s,e) => Array(e+1-s).fill(s).map((e,i) => i+1);
let squares = (s,e) => Array(e+1-s).fill(s).map((e,i) => (i+1)**2);
let cubes =  (s,e) => Array(e+1-s).fill(s).map((e,i) => (i+1)**3);
let random = Array(10).fill(0).map((i) => Math.floor(Math.random()*100)+1);
let multOf3and5 = (s,e) => Array(e+1-s).fill(s).map((e,i) => i> 0 && (i%3==0 || i%5 == 0) ? true : false);

// Build the text
txt += `Natural Numbers: ${natural(1,10)} <br>`;
txt += `Square Numbers: ${squares(1,10)} <br>`;
txt += `Cube Numbers: ${cubes(1,10)} <br>`;
txt += `Random Numbers: ${random} <br>`;
txt += `Multiples of 3 and 5: ${multOf3and5(0,15)} <br>`;

// Display Text in the Browser
document.getElementById('demo').innerHTML = txt;