/* create a 16x16 grid using Javascript */
grid = document.getElementById("grid");

let randomNumber; 

let number = 16;

let mouseDown = false; 
document.body.onmousedown = () => (mouseDown = true); 
document.body.onmouseup = () => (mouseDown = false); 

const black = document.getElementById("black"); 
const monochrome = document.getElementById("monochrome"); 
const desert = document.getElementById("desert"); 
const cottonCandy = document.getElementById("cottonCandy");
const peacock = document.getElementById("peacock"); 
const eraser = document.getElementById("eraser"); 
const clearButton = document.getElementById("clearButton"); 

let colorScheme = "black";

black.addEventListener("click", () => colorScheme = "black"); 
black.addEventListener("click", () => console.log(colorScheme));

monochrome.addEventListener("click", () => colorScheme = "monochrome")
monochrome.addEventListener("click", () => console.log(colorScheme));

desert.addEventListener("click", () => colorScheme = "desert")
desert.addEventListener("click", () => console.log(colorScheme));

cottonCandy.addEventListener("click", () => colorScheme = "cottonCandy"); 
cottonCandy.addEventListener("click", () => console.log(colorScheme));

peacock.addEventListener("click", () => colorScheme = "peacock"); 
peacock.addEventListener("click", () => console.log(colorScheme));

eraser.addEventListener("click", () => colorScheme = "eraser");
clearButton.addEventListener("click", eraseAll)

function eraseAll() {
  let list = document.getElementsByClassName("gridElement")
  console.log(list); 
  for (let i = 0; i < list.length; i++) {
    list[i].style.backgroundColor = "white"; 
  }
}

function getRandom() { //needs no input, generates a random number 0-4
  let randomNumber = Math.floor(Math.random()*6)
  //console.log(randomNumber); 
  return randomNumber; 

}



let desertColors = ["#C75112", "#9F1515", "#A92A86", "#D18D3F", "#FFF245", "#F07D00"];
// 1)burnt orange, 2)dark red, 3)sunset pink, 4)tree bark brown, 5)bright orange
let monochromeColors = ["#E3E8EA", "#BCCAD0", "#9BA8AE", "#707A7E", "#495054", "#343A40"];
// all grey, from lightest to darkest 
let cottonCandyColors = ["#FFB3DE", "#CCEFE3", "#EBC8F3", "#C9FDFF", "#FFFCC9", "#FBBED8"];
//1)light hot pink 2)light minty green 3) easter egg purple 4) super light blue 5) baby yellow 6) another light pink 
let peacockColors = [];


function colorChange(e) {
  if (e.type === 'mouseover' && !mouseDown) return
  if (colorScheme === "black") {
    e.target.style.backgroundColor = 'black'; 
  }
  else if (colorScheme === "desert") {
    e.target.style.backgroundColor = `${desertColors[randomNumber]}`;
    //e.target.style.backgroundColor = "#C75112";
    console.log(desertColors[randomNumber]); 

  }
  else if (colorScheme === "monochrome") {
    e.target.style.backgroundColor = `${monochromeColors[randomNumber]}`; 

  }
  else if (colorScheme === "cottonCandy") {
    e.target.style.backgroundColor = `${cottonCandyColors[randomNumber]}`; 

  }
  else if (colorScheme === "peacock") {

  }
  else if (colorScheme === "eraser") {
    e.target.style.backgroundColor = "white"; 
  }
}

function setUpGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${number}, 1fr)`; 

  for (let i=0; i<size*size; i++) {
    let size = number; 
    //console.log(size);
    const newBox = document.createElement('div'); 
    newBox.classList.add('gridElement');
    //console.log(newBox);
    //newBox.addEventListener('mousedown', () => newBox.style.backgroundColor = "black");
    newBox.addEventListener('mouseover', colorChange );
    newBox.addEventListener('mouseover', () => randomNumber = getRandom());
    newBox.addEventListener('mouseover', () => console.log(randomNumber)); 
    newBox.addEventListener('mousedown', colorChange); 
    newBox.style.borderStyle = "solid"; 
    newBox.style.borderColor = "black"; 
    //newBox.textContent = `${i}`; 
    grid.append(newBox); 
    
}
}





function clearGrid() {
  grid.innerHTML = '';

}

setUpGrid(number); 


let slider = document.getElementById("sizeSlider");
//slider.innerHTML = slider.value;  
//console.log(slider.value); 

slider.oninput = function() {
  console.log(slider.value); 
  number = slider.value; 
  clearGrid();
  setUpGrid(number); 
  
}



 
