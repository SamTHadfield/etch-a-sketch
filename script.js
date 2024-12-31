const container = document.querySelector(".container");
let numberOfSquares = 16;

// Establishing default columns and rows
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

// Add "reset" button with prompt for user input
const button = document.createElement("button");
document.body.insertBefore(button, container);
button.id = "reset-button";
button.addEventListener("click", resetSquares);

// Haven't committed anything below
// Construct resetSquares() callback function
function resetSquares() {}
