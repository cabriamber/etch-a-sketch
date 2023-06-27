/* create a 16x16 grid using Javascript */
let randomNumber; 

let number = 16;

let mouseDown = false; 
document.body.onmousedown = () => (mouseDown = true); 
document.body.onmouseup = () => (mouseDown = false); 

let colorScheme = "black";

let boxLines = false; 

let desertColors = ["#C75112", "#9F1515", "#A92A86", "#D18D3F", "#FFF245", "#F07D00"];
// 1)burnt orange, 2)dark red, 3)sunset pink, 4)tree bark brown, 5)bright orange
let monochromeColors = ["#E3E8EA", "#BCCAD0", "#9BA8AE", "#707A7E", "#495054", "#343A40"];
// all grey, from lightest to darkest 
let cottonCandyColors = ["#FFB3DE", "#CCEFE3", "#EBC8F3", "#C9FDFF", "#FFFCC9", "#FBBED8"];
//1)light hot pink 2)light minty green 3) easter egg purple 4) super light blue 5) baby yellow 6) another light pink 
let peacockColors = ['#C0F862',"#10a690",'#1166A3','#3d4987','#402b6d','#5b066b']
// 1)bright yellow green 2) greenish blue 3) teal 4)purple blue 4)royal purple 6) burnt yellow orange
let vaporwaveColors = ["#300350","#94167F","#E93479","#F9AC53","#F62E97","#153CB4"]
//1)Russian Violet 2)MardiGras Dark Pink 3)Cerise Light Pink 4) Rajah (sand color) 5) Persian Rose (bright pink) 6) Persian Blue (close to royal blue)
let royalNightsColors = ["#B72D0F","#E0C020","#8D38AF","#F18730","#2A60A4","#8C8181"]; 
//Drew's colors 
let planetUtopiaColors = ["#FCB300","#f7072f","#19a2f6","#f6f619","#e843e8","#66e843"];
// Scott's Colors 
let judysFlowerGardenColors = ["#ef3e1b","#ef1b58","#efec1b","#9f1bef","#1bef52","#114aef"];
//Mom's Colors
let summerParkColors =["#e00081","#e05500","#dde000","#e03a00","#e03a00","#e00000"];
//Nyla's Colors 
let opalPrismColors = ["#a98cda","#7937e5","#6309f5","#cfc4e1","#5d2fa8","#4d0bba"];
//Tiya's Colors 
let hauntedForestColors = ["#d5d8d8","#69896d","#3e625c","#1d443e","#0f292f","#196f3d"];
let corporateSuitColors = ["#ede8da","#c1bbaf","#8e8c8a","#534e50","#212736","#34495e"];
let springMeadowColors = ["#eedb07","#d8aa01","#779439","#2f530d","#29371a","#CEDA00"];
let snowdropColors = ["#AED6F1","#ddf4ff","#4b79c0","#26408e","	#18265a","#4F60FD"];
let sunColors = ["#fff8e8","#fdd879","#ffb700","#9f580e","#533514","#F7DC6F"];
let bahamaSistersColors = ["#2d1509","#e27d00","#de5700","#466300","#91ac00","#A8EE00"];
let argentinaColors = ["#fff8e7","#6b0647", "#65483d","#ffc663","#1c5749","#34495E"];

const grid = document.getElementById("grid");

const black = document.getElementById("black"); 
const monochrome = document.getElementById("monochrome"); 
const desert = document.getElementById("desert"); 
const cottonCandy = document.getElementById("cottonCandy");
const peacock = document.getElementById("peacock"); 
const vaporwave = document.getElementById("vaporwave");

const royalNights = document.getElementById("royalNights");
const planetUtopia = document.getElementById("planetUtopia"); 
const summerPark = document.getElementById("summerPark"); 
const judysFlowerGarden = document.getElementById("judysFlowerGarden"); 
const opalPrism = document.getElementById("opalPrism"); 

const hauntedForest = document.getElementById("hauntedForest");
const corporateSuit = document.getElementById("corporateSuit");
const springMeadow = document.getElementById("springMeadow"); 
const snowdrop = document.getElementById("snowdrop"); 
const bahamaSisters = document.getElementById("bahamaSisters"); 
const sundrop = document.getElementById("sundrop");
const argentina = document.getElementById("argentina");

const eraser = document.getElementById("eraser"); 
const clearButton = document.getElementById("clearButton");

const gridLines = document.getElementById("gridLines");

let slider = document.getElementById("sizeSlider");


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

vaporwave.addEventListener("click", () => colorScheme = "vaporwave"); 

royalNights.addEventListener("click", () => colorScheme = "royalNights"); 
royalNights.addEventListener("click", () => console.log(colorScheme)); 

planetUtopia.addEventListener("click", () => colorScheme = "planetUtopia"); 
planetUtopia.addEventListener("click", () => console.log(colorScheme)); 

summerPark.addEventListener("click", () => colorScheme = "summerPark"); 
summerPark.addEventListener("click", () => console.log(colorScheme)); 

judysFlowerGarden.addEventListener("click", () => colorScheme = "judysFlowerGarden"); 
judysFlowerGarden.addEventListener("click", () => console.log(colorScheme)); 

opalPrism.addEventListener("click", () => colorScheme = "opalPrism"); 
opalPrism.addEventListener("click", () => console.log(colorScheme)); 

hauntedForest.addEventListener("click", () => colorScheme = "hauntedForest");
hauntedForest.addEventListener("click", () => console.log(colorScheme)); 

corporateSuit.addEventListener("click", () => colorScheme = "corporateSuit");
corporateSuit.addEventListener("click", () => console.log(colorScheme)); 

sundrop.addEventListener("click", () => colorScheme = "sundrop"); 
sundrop.addEventListener("click", () => console.log(colorScheme));

argentina.addEventListener("click", () => colorScheme = "argentina"); 
argentina.addEventListener("click", () => console.log(colorScheme)); 

springMeadow.addEventListener("click",() => colorScheme = "springMeadow"); 
springMeadow.addEventListener("click", () => console.log(colorScheme)); 

bahamaSisters.addEventListener("click", () => colorScheme = "bahamaSisters"); 
bahamaSisters.addEventListener("click", () => console.log(colorScheme)); 

snowdrop.addEventListener("click", () => colorScheme = "snowdrop"); 
snowdrop.addEventListener("click", () => console.log(colorScheme)); 

eraser.addEventListener("click", () => colorScheme = "eraser");

clearButton.addEventListener("click", eraseAll)

gridLines.addEventListener("click", () => console.log("gridLines")); 
gridLines.addEventListener("click", changeText);
gridLines.addEventListener("click", changeLines); 


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
    console.log(cottonCandyColors[randomNumber]); 

  }
  else if (colorScheme === "peacock") {
    e.target.style.backgroundColor = `${peacockColors[randomNumber]}`; 
    console.log(peacockColors[randomNumber])

  }
  else if (colorScheme === "vaporwave") {
    e.target.style.backgroundColor = `${vaporwaveColors[randomNumber]}`; 
    console.log(randomNumber);
    console.log(vaporwaveColors[randomNumber])
  }
  else if (colorScheme === "royalNights") {
    e.target.style.backgroundColor = `${royalNightsColors[randomNumber]}`; 
    console.log(royalNightsColors[randomNumber]); 
  }
  else if (colorScheme === "planetUtopia") {
    e.target.style.backgroundColor = `${planetUtopiaColors[randomNumber]}`; 
  }
  else if (colorScheme === "judysFlowerGarden") {
    e.target.style.backgroundColor = `${judysFlowerGardenColors[randomNumber]}`; 
  }
  else if (colorScheme === "summerPark") {
    e.target.style.backgroundColor = `${summerParkColors[randomNumber]}`; 
  }
  else if (colorScheme === "opalPrism") {
    e.target.style.backgroundColor = `${opalPrismColors[randomNumber]}`; 
  }
  else if (colorScheme === "hauntedForest") {
    e.target.style.backgroundColor = `${hauntedForestColors[randomNumber]}`;
  }
  else if (colorScheme === "corporateSuit") {
    e.target.style.backgroundColor = `${corporateSuitColors[randomNumber]}`;
  }
  else if (colorScheme === "argentina") {
    e.target.style.backgroundColor = `${argentinaColors[randomNumber]}`;
  }
  else if (colorScheme === "sundrop") {
    e.target.style.backgroundColor = `${sunColors[randomNumber]}`; 
  }
  else if (colorScheme === "springMeadow") {
    e.target.style.backgroundColor = `${springMeadowColors[randomNumber]}`; 
  }
  else if (colorScheme === "bahamaSisters") {
    e.target.style.backgroundColor = `${bahamaSistersColors[randomNumber]}`; 
  }
  else if (colorScheme === "snowdrop") {
    e.target.style.backgroundColor = `${snowdropColors[randomNumber]}`; 
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
    //newBox.style.borderStyle = "solid"; 
    //newBox.style.borderColor = "white"; 
    //newBox.textContent = `${i}`; 
    grid.append(newBox); 
    
}
}

function clearGrid() {
  grid.innerHTML = '';
  boxLines = false; 
  boxDisplayText = "Show Grid"; 
  gridLines.textContent = "Show Grid"; 
}

slider.oninput = function() {
  console.log(slider.value); 
  number = slider.value; 
  clearGrid();
  setUpGrid(number); 
  
}

let boxDisplayText = "Show Grid"; 

function changeText() {
  console.log("changeText"); 

  if (boxDisplayText === "Show Grid") {
    gridLines.textContent = "Hide Grid"; 
    boxDisplayText = "Hide Grid"; 
  }
  else if (boxDisplayText === "Hide Grid") {
    gridLines.textContent = "Show Grid"; 
    boxDisplayText = "Show Grid"; 
  }
}

setUpGrid(number); 



function changeLines() {
  console.log("changeLines"); 
  let gridElements = document.getElementsByClassName("gridElement")
  if (boxLines === false) {
    for (let i = 0; i < gridElements.length; i++) {
      gridElements[i].style.borderStyle = "solid"; 
      gridElements[i].style.borderStyle = "black"; 
      gridElements[i].style.borderWidth = "1px"; 
    }
  boxLines = true; 
  console.log(boxLines); 
  }
  else if (boxLines === true) {
    for (let i = 0; i < gridElements.length; i++) {
      gridElements[i].style.borderStyle = "none"; 
    }
  boxLines = false; 
  console.log(boxLines); 
  }
}


 
