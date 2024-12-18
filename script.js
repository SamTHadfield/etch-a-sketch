const gridContainer = document.getElementById("grid-container");

for (let i = 1; i <= 256; i++) {
  const gridSquares = document.createElement("div");
  gridSquares.classList.add("grid-squares");
  gridContainer.appendChild(gridSquares);
}
