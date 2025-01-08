const mainContainer = document.querySelector(".main-container");
let column;

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
      column.addEventListener("mouseover", () => {
        column.style.backgroundColor = "#ff8343";
      });
      row.appendChild(column);
    }
    sketchContainer.appendChild(row);
  }
}

// Collecting Columns in Node List
function gatherColumns() {
  column = document.querySelectorAll(".column");
}

// Mouse Over Event Listener
function addMouseOverListener(color, mode = "color") {
  column.forEach((col) => {
    col.addEventListener("mouseover", () => {
      if (mode === "color") {
        resetOpacityDefault();
        setColumnColor(col, color);
      } else if (mode === "random") {
        setRandomColor(col);
      } else if (mode === "darken") {
        darkenColumn(col);
      } else if (mode === "eraser") {
        eraseColumnColor(col, color);
      }
    });
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
  addMouseOverListener(colorPicker.value, "color");
}

function setColumnColor(column, color) {
  column.style.backgroundColor = color;
}

//////////////////////
// "Random" Button //
/////////////////////
const randomButton = document.getElementById("random-button");
randomButton.addEventListener("click", random);

function random() {
  gatherColumns();
  addMouseOverListener(null, "random");
}

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const random = `rgb(${red}, ${green}, ${blue})`;
  return random;
}

function setRandomColor(column) {
  const randomColor = generateRandomColor();
  column.style.backgroundColor = randomColor;
}

/////////////////////
// "Darken" Button //
/////////////////////
const darkenButton = document.getElementById("darken-button");
darkenButton.addEventListener("click", darken);

function darken() {
  gatherColumns();
  addMouseOverListener("black", "darken");
}

function darkenColumn() {}

// column.forEach((column) => {
//   column.addEventListener("mouseover", () => {
//     column.style.opacity = "0";
//   });
// });

// "Eraser" Button
// Start here tomorrow (01/08)
const eraserButton = document.getElementById("eraser-button");
eraserButton.addEventListener("click", eraser);

function eraser() {
  gatherColumns();
  addMouseOverListener("revert", "eraser");
}

function eraseColumnColor(column, color) {
  column.style.backgroundColor = color;
}

// "Clear" Button
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clear);

function clear() {
  gatherColumns();
  clearSketchPad();
}

function clearSketchPad() {
  column.forEach((column) => {
    column.style.backgroundColor = "revert";
  });
}

// "Reset" Button
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

// let squares = prompt("How many squares should there be on each side?");
// if (squares >= 1 && squares <= 100) {
//   grid(squares);
// } else {
//   alert("You entered an incorrect value.");
// }

// MISCELLANEOUS FUNCTIONS

// Reset Opacity
function resetOpacityDefault() {
  column.forEach((column) => {
    column.addEventListener("mouseover", () => {
      column.style.opacity = "1";
    });
  });
}
