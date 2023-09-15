const gridContainer = document.querySelector('.grid-container')

function createGrid(rows, columns){
    for(let i=0; i<=rows*columns; i++){
        const gridCell = document.createElement('div')
        gridCell.classList.add('grid-cell')
        gridContainer.appendChild(gridCell)   
    }
}

createGrid (16,16)

function addHoverEffect(){
    const gridCells = document.querySelectorAll('.grid-cell')

    gridCells.forEach((cell) => {
        cell.addEventListener('mouseenter', () =>{
            cell.style.backgroundColor = 'black'
        })
    })

    gridCells.forEach((cell) => {
        cell.addEventListener('mouseleave', () =>{
            cell.style.backgroundColor = 'white'
        })
    })
}

addHoverEffect()

