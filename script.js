const container = document.getElementById("container");

for (let i = 1; i <= 256; i++) {
  const gridSquares = document.createElement("div");
  gridSquares.classList.add("grid-squares");
  container.appendChild(gridSquares);
}
