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

/////////////
// BUTTONS //
/////////////

// Color Button

// "Random" Button
const randomButton = document.getElementById("random-button");
randomButton.addEventListener("click", random);

// "Darken" Button
const darkenButton = document.getElementById("darken-button");
darkenButton.addEventListener("click", darken);

// "Eraser" Button
const eraserButton = document.getElementById("eraser-button");
eraserButton.addEventListener("click", eraser);

// "Clear" Button
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clear);

// "Reset" Button
const button = document.getElementById("reset-button");
button.addEventListener("click", resetSquares);

//////////////////////
// HELPER FUNCTIONS //
//////////////////////

// "Random" Callback Function
function random() {
  const column = document.querySelectorAll(".column");
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

// "Darken" Callback Function
function darken() {
  const column = document.querySelectorAll(".column");
  column.forEach((column) => {
    column.addEventListener("mouseover", () => {
      column.style.opacity = +column.style.opacity + 0.1;
      column.style.backgroundColor = "black";
    });
  });
}

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
