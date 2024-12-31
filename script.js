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

// Add "reset" button with prompt for user input
const button = document.createElement("button");
document.body.insertBefore(button, mainContainer);
button.id = "reset-button";
button.textContent = "Reset the Grid";
button.addEventListener("click", resetSquares);

// Construct resetSquares() callback function
function resetSquares() {
  sketchContainer.innerHTML = "";
  let squares = prompt("How many squares should there be on each side?");
  if (squares >= 1 && squares <= 100) {
    grid(squares);
  } else {
    alert("You entered an incorrect value.");
  }
}

// Add h1
const h1 = document.createElement("h1");
h1.classList.add("header");
h1.textContent = "Etch A Sketch";
document.body.insertBefore(h1, button);
