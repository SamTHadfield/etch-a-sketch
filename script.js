// Establishing number of rows and columns
const container = document.querySelector(".container");
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
        column.style.backgroundColor = "#179BAE";
      });
      row.appendChild(column);
    }
    container.appendChild(row);
  }
}

// Add "reset" button with prompt for user input
const button = document.createElement("button");
document.body.insertBefore(button, container);
button.id = "reset-button";
button.addEventListener("click", resetSquares);

// Construct resetSquares() callback function
function resetSquares() {
  container.innerHTML = "";
  let squares = prompt("How many squares should there be on each side?");
  if (squares >= 1 && squares <= 100) {
    grid(squares);
  } else {
    alert("You entered an incorrect value.");
  }
}
