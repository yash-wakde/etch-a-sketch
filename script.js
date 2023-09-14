const gridContainer = document.querySelector('.grid-container')

function createGrid(rows, columns){
    for(let i=0; i<=rows*columns; i++){
        const gridCell = document.createElement('div')
        gridCell.classList.add('grid-cell')
        gridContainer.appendChild(gridCell)   
    }
}

createGrid (16,16)