const container = document.querySelector(".container");

// Default Setting
for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.classList.add("row");

  for (let i = 0; i < 16; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    row.appendChild(column);
  }

  container.appendChild(row);
}
