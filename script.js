const mainContainer = document.querySelector(".main-container");
let column;
let currentMode = null;

// Establishing number of rows and columns
const sketchContainer = document.querySelector(".sketch-container");
let squares = 16;
grid(squares);

// Creating grid of rows and columns
function grid(numberOfSquares) {
  for (let i = 0; i < numberOfSquares; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < numberOfSquares; i++) {
      const column = document.createElement("div");
      column.classList.add("column");
      const handleMouseover = (event) => {
        const col = event.target;
        col.style.backgroundColor = "#ff8343";
      };
      column.addEventListener("mouseover", handleMouseover);
      currentMode = handleMouseover;
      row.appendChild(column);
    }
    sketchContainer.appendChild(row);
  }
}

// MISC. FUNCTIONS
function gatherColumns() {
  column = document.querySelectorAll(".column");
}

//Remove Current Mode Listener
function removeCurrentModeListener() {
  column.forEach((col) => {
    if (currentMode) col.removeEventListener("mouseover", currentMode);
  });
}

/////////////
// BUTTONS //
/////////////

////////////////////
// "Color" Button //
///////////////////

const colorPicker = document.querySelector("input");
colorPicker.addEventListener("blur", chooseColor);

function chooseColor() {
  gatherColumns();
  removeCurrentModeListener();

  // Handler Function
  const handleMouseover = (event) => {
    const col = event.target;
    col.style.removeProperty("opacity");
    col.style.backgroundColor = colorPicker.value;
  };

  // Create Mouseover
  column.forEach((col) => {
    col.addEventListener("mouseover", handleMouseover);
  });
  currentMode = handleMouseover;
}

//////////////////////
// "Random" Button //
/////////////////////
const randomButton = document.getElementById("random-button");
randomButton.addEventListener("click", randomColor);

function randomColor() {
  gatherColumns();
  removeCurrentModeListener();

  // Define handler
  const handleMouseover = (event) => {
    const col = event.target;
    col.style.removeProperty("opacity");
    const random = generateRandomColor();
    col.style.backgroundColor = random;
    console.log(col.style.opacity);
  };

  column.forEach((col) => col.addEventListener("mouseover", handleMouseover));
  currentMode = handleMouseover;
}

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const random = `rgb(${red}, ${green}, ${blue})`;
  return random;
}

/////////////////////
// "Darken" Button //
/////////////////////
const darkenButton = document.getElementById("darken-button");
darkenButton.addEventListener("click", darken);

function darken() {
  gatherColumns();
  removeCurrentModeListener();

  // Define handler
  const handleMouseover = (event) => {
    const col = event.target;
    col.style.opacity = Math.min(+col.style.opacity + 0.1 || 0.1, 1);
    col.style.backgroundColor = "black";
    console.log(col.style.opacity);
  };

  // Add New Mouseover Listener
  column.forEach((col) => col.addEventListener("mouseover", handleMouseover));
  currentMode = handleMouseover;
}

//////////////////////
// "Eraser" Button //
/////////////////////
const eraserButton = document.getElementById("eraser-button");
eraserButton.addEventListener("click", eraser);

function eraser() {
  gatherColumns();
  removeCurrentModeListener();

  // Handle Mouseover Events
  const handleMouseover = (event) => {
    const col = event.target;
    col.removeAttribute("style");
  };

  // Create New Mouseover
  column.forEach((col) => col.addEventListener("mouseover", handleMouseover));
  currentMode = handleMouseover;
}

// "Clear" Button
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clear);

function clear() {
  gatherColumns();
  column.forEach((col) => {
    col.removeAttribute("style");
  });
}

/////////////////////
// "Reset" Button //
////////////////////
const button = document.getElementById("reset-button");
button.addEventListener("click", resetSquares);

function resetSquares() {
  sketchContainer.innerHTML = "";
  let squares;

  while (true) {
    squares = prompt(
      "How many squares should there be on each side? Please enter a number between 1 and 100."
    );
    if (squares >= 1 && squares <= 100) {
      grid(squares);
      break;
    }
    alert("Please enter a number between 1 and 100.");
  }
}
