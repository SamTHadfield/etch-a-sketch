const mainContainer = document.querySelector(".main-container");

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

// const row = document.querySelectorAll(".row");
// const column = document.querySelectorAll(".column");

/////////////
// BUTTONS //
/////////////

// Color Button

// Random Button

// Darken Button

// Eraser Button
const eraserButton = document.getElementById("eraser-button");
eraserButton.addEventListener("click", eraser);

// Clear Button
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clear);

// Reset Button
const button = document.getElementById("reset-button");
button.addEventListener("click", resetSquares);

//////////////////////
// HELPER FUNCTIONS //
//////////////////////

// "Eraser" Callback Function
function eraser() {
  const column = document.querySelectorAll(".column");
  column.forEach((column) =>
    column.addEventListener("mouseover", () => {
      column.style.backgroundColor = "white";
    })
  );
}

// "Clear" Callback Function
function clear() {
  const column = document.querySelectorAll(".column");
  column.forEach((column) => {
    column.style.backgroundColor = "white";
  });
}

// "Reset" Callback Function
function resetSquares() {
  sketchContainer.innerHTML = "";
  let squares = prompt("How many squares should there be on each side?");
  if (squares >= 1 && squares <= 100) {
    grid(squares);
  } else {
    alert("You entered an incorrect value.");
  }
}
