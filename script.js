// SCRIPT OF ETCH A SKETCH

function createGrid() {
    const mainContainer = document.querySelector('.main-container');
    const squaresInRowNumber =  Math.floor(window.innerWidth/16);
    
    for (let i = squaresInRowNumber; i >= 0; i--) {
        const row = document.createElement('div');

        mainContainer.appendChild(row);
        row.classList.add('gridRow');

        for (let i = squaresInRowNumber; i >= 0; i--) { 
            const squareDiv = document.createElement('div');

            row.appendChild(squareDiv);
            squareDiv.classList.add('square-div');
        }
    }
    
}

createGrid();