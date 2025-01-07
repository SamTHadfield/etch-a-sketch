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

/////////////
// BUTTONS //
/////////////

//"Color" Button
const colorPicker = document.querySelector("input");
colorPicker.addEventListener("blur", chooseColor);

function chooseColor() {
  // const column = document.querySelectorAll(".column");
  gatherColumns();
  column.forEach((column) => {
    column.addEventListener("mouseover", () => {
      resetOpacityDefault();
      column.style.backgroundColor = colorPicker.value;
    });
  });
}

// "Random" Button
const randomButton = document.getElementById("random-button");
randomButton.addEventListener("click", random);

function random() {
  // const column = document.querySelectorAll(".column");
  gatherColumns();
  column.forEach((column) => {
    column.addEventListener("mouseover", () => {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      const random = `rgb(${red}, ${green}, ${blue})`;
      column.style.backgroundColor = random;
    });
  });
}

// "Darken" Button
const darkenButton = document.getElementById("darken-button");
darkenButton.addEventListener("click", darken);

function darken() {
  // const columns = document.querySelectorAll(".column");
  gatherColumns();
  column.forEach((column) => {
    column.addEventListener("mouseover", () => {
      resetOpacityDarken();
      column.style.opacity = +column.style.opacity + 0.1;
    });
  });
}

// "Eraser" Button
const eraserButton = document.getElementById("eraser-button");
eraserButton.addEventListener("click", eraser);

function eraser() {
  gatherColumns();
  column.forEach((column) =>
    column.addEventListener("mouseover", () => {
      column.style.backgroundColor = "white";
    })
  );
}

// "Clear" Button
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clear);

function clear() {
  gatherColumns();
  column.forEach((column) => {
    column.style.backgroundColor = "white";
  });
}

// "Reset" Button
const button = document.getElementById("reset-button");
button.addEventListener("click", resetSquares);

function resetSquares() {
  sketchContainer.innerHTML = "";
  let squares = prompt("How many squares should there be on each side?");
  if (squares >= 1 && squares <= 100) {
    grid(squares);
  } else {
    alert("You entered an incorrect value.");
  }
}

// MISCELLANEOUS FUNCTIONS

// Reset Opacity
function resetOpacityDefault() {
  gatherColumns();
  column.forEach((column) => {
    column.style.opacity = "1";
  });
}

function resetOpacityDarken() {
  gatherColumns();
  column.forEach((column) => {
    column.style.opacity = ".1";
  });
}
