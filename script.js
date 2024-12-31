const container = document.querySelector(".container");

// Establishing columns and rows
for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.classList.add("row");

  for (let i = 0; i < 16; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    column.addEventListener("mouseover", () => {
      column.style.backgroundColor = "#179BAE";
    });
    row.appendChild(column);
  }
  container.appendChild(row);
}
