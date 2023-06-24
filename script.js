/* create a 16x16 grid using Javascript */
grid = document.getElementById("grid");

let number = 16;

function colorChange(e) {
 e.target.style.backgroundColor = 'black'; 
}

function setUpGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${number}, 1fr)`; 

  for (let i=0; i<size*size; i++) {
    let size = number; 
    console.log(size);
    const newBox = document.createElement('div'); 
    newBox.classList.add('gridElement');
    //console.log(newBox);
    //newBox.addEventListener('mousedown', () => newBox.style.backgroundColor = "black");
    newBox.addEventListener('mouseover', colorChange );
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
console.log(slider.value); 

slider.oninput = function() {
  console.log(slider.value); 
  number = slider.value; 
  clearGrid();
  setUpGrid(number); 
  
}



 
