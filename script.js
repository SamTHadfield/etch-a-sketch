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
        // console.log(column.style.opacity);
      });
      row.appendChild(column);
    }
    sketchContainer.appendChild(row);
  }
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
  const column = document.querySelectorAll(".column");
  column.forEach((col) => {
    col.addEventListener("mouseover", () => {
      col.style.backgroundColor = colorPicker.value;
    });
  });
}

//////////////////////
// "Random" Button //
/////////////////////
const randomButton = document.getElementById("random-button");
randomButton.addEventListener("click", randomColor);

function randomColor() {
  const column = document.querySelectorAll(".column");
  column.forEach((col) => {
    col.addEventListener("mouseover", () => {
      const random = generateRandomColor();
      col.style.backgroundColor = random;
    });
  });
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
  const column = document.querySelectorAll(".column");
  column.forEach((col) => {
    col.addEventListener("mouseover", () => {
      col.style.opacity = +col.style.opacity + 0.1;
      col.style.backgroundColor = "black";
    });
  });
}

//////////////////////
// "Eraser" Button //
/////////////////////
const eraserButton = document.getElementById("eraser-button");
eraserButton.addEventListener("click", eraser);

function eraser() {
  const column = document.querySelectorAll(".column");
  column.forEach((col) => {
    col.addEventListener("mouseover", () => {
      col.style.removeProperty("background-color");
    });
  });
}

// "Clear" Button
const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clear);

function clear() {
  const column = document.querySelectorAll(".column");
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
