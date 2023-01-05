// SCRIPT OF ETCH A SKETCH

function createGrid() {
    const gridContainer = document.querySelector('.grid-container');
    const squaresInRowNumber =  Math.floor(window.innerWidth/16);
    
    for (let i = squaresInRowNumber; i >= 0; i--) {
        const row = document.createElement('div');

        gridContainer.appendChild(row);
        row.classList.add('gridRow');

        for (let i = squaresInRowNumber; i >= 0; i--) { 
            const squareDiv = document.createElement('div');

            row.appendChild(squareDiv);
            squareDiv.classList.add('square-div');
        }
    }
    
}

createGrid();

document.querySelector('.size-button').addEventListener('click', () => prompt('How much squares per side do you want to draw?', ''));