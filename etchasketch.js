const divGridContainer = document.getElementById("gridContainer");

let gridSize = 16;

function makeGrid(size) {
    divGridContainer.style.setProperty("grid-template-columns", `repeat(${size}, 1fr)`);
    divGridContainer.style.setProperty("grid-template-rows", `repeat(${size}, 2em)`);

    for (let i = 0; i < (size * size); i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add("cell");
        divGridContainer.appendChild(gridCell);
    }
}

makeGrid(gridSize);