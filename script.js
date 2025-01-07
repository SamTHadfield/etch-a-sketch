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

//"Color" Button
const colorPicker = document.querySelector("input");
colorPicker.addEventListener("blur", chooseColor);

function chooseColor() {
  const column = document.querySelectorAll(".column");
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

<<<<<<< HEAD
=======
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

// "Choose Color" Callback Function
function chooseColor() {
  const column = document.querySelectorAll(".column");
  column.forEach((column) => {
    column.addEventListener("mouseover", () => {
      column.style.backgroundColor = colorPicker.value;
    });
  });
}

// "Random" Callback Function
>>>>>>> c9037d79f662cb35ca381eb394413f33be1782ae
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

// "Darken" Button
const darkenButton = document.getElementById("darken-button");
darkenButton.addEventListener("click", darken);

function darken() {
<<<<<<< HEAD
  const columns = document.querySelectorAll(".column");
  columns.forEach((column) => {
    column.addEventListener("mouseover", () => {
      resetOpacityDarken();
      column.style.opacity = +column.style.opacity + 0.1;
    });
=======
  const column = document.querySelectorAll(".column");
  column.forEach((column) => {
    if (+column.style.opacity === 1) {
      column.addEventListener("mouseover", () => {
        +column.style.opacity === 0;
      });
    } else if (+column.style.opacity === 0) {
      column.addEventListener("mouseover", () => {
        column.style.opacity = +column.style.opacity + 0.1;
        column.style.backgroundColor = "black";
      });
    }
>>>>>>> c9037d79f662cb35ca381eb394413f33be1782ae
  });
}

// "Eraser" Button
const eraserButton = document.getElementById("eraser-button");
eraserButton.addEventListener("click", eraser);

function eraser() {
  const column = document.querySelectorAll(".column");
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
  const column = document.querySelectorAll(".column");
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
  const columns = document.querySelectorAll(".column");
  columns.forEach((column) => {
    column.style.opacity = "1";
  });
}

function resetOpacityDarken() {
  const columns = document.querySelectorAll(".column");
  columns.forEach((column) => {
    column.style.opacity = ".1";
  });
}
