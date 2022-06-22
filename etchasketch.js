const divGridContainer = document.querySelector("#gridContainer");
const gridSizeBtn = document.querySelector("#gridNumberBtn");
const resetBtn = document.querySelector("#resetBtn");

let gridSize = 16;

gridSizeBtn.addEventListener('click', gridSizePrompt)

// User prompt which allows the user to set the grid
function gridSizePrompt() {
    let newGridSize = prompt("How many squares per side would you like? Please enter a number between 1 to 100");
    if (newGridSize === null) {
        return;
    } else if (newGridSize < 1 || newGridSize > 100) {
        gridSizePrompt()
    } else if (newGridSize <= 100) {
        clearGrid();
        makeGrid(newGridSize);
    }
}

// Function that makes the grid.
function makeGrid(size) {
    divGridContainer.style.setProperty("grid-template-columns", `repeat(${size}, 1fr)`);
    divGridContainer.style.setProperty("grid-template-rows", `repeat(${size}, 1em)`);

    for (let i = 0; i < (size * size); i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add("gridCellStyle");
        gridCell.id = "cell";
        divGridContainer.appendChild(gridCell);
    }
}

// Function to clear an existing grid
function clearGrid() {
    while (divGridContainer.firstChild) {
        divGridContainer.removeChild(divGridContainer.lastChild);
    }
}

makeGrid(gridSize);

// Creates random background colours
function randomBgColour() {
    const redBg = Math.floor(Math.random() * 256);
    const greenBg = Math.floor(Math.random() * 256);
    const blueBg = Math.floor(Math.random() * 256);
    return `rgb(${redBg}, ${greenBg}, ${blueBg})`
}

// The hover function which changes the background colour of the grid.
divGridContainer.addEventListener('mouseover', (e) => {
    // e.target.classList.add("gridCellColouredStyle");
    e.target.style.backgroundColor = randomBgColour();
})

// Button to reset the grid back to 16x16
resetBtn.addEventListener('click', () => {
    clearGrid();
    makeGrid(gridSize);
})