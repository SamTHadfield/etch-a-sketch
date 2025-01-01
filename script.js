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

// Add event listener to "reset" button
const button = document.getElementById("reset-button");
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

// Create containers for "settingsButtons"
for (let i = 1; i < 3; i++) {
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");
  buttonContainer.id = "button-container-" + [i];
  if (i === 1) {
    mainContainer.insertBefore(buttonContainer, sketchContainer);
  } else {
    mainContainer.appendChild(buttonContainer);
  }

  for (let j = 1; j < 5; j++) {}
}

// Create four extra buttons (for tomorrow just run these as a nested for loop with the button containers)
// for (let i = 1; i < 5; i++) {
//   // Grab button containers
//   const buttonContainer1 = document.getElementById("button-container-1");
//   const buttonContainer2 = document.getElementById("button-container-2");

//   // Create 'settings' buttons and append two buttons to each button container
//   const settingsButtons = document.createElement("button");
//   settingsButtons.classList.add("settings-buttons");
//   settingsButtons.id = "settings-button-" + [i];
//   if (i === 1 || i === 2) {
//     buttonContainer1.appendChild(settingsButtons);
//   } else {
//     buttonContainer2.appendChild(settingsButtons);
//   }
// }
