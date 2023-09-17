const gridContainer = document.querySelector('.grid-container')
let mouseHeld = false

function createGrid(size){
    for(let i=0; i<=size*size; i++){
        const gridCell = document.createElement('div')
        gridCell.classList.add('grid-cell')
        gridContainer.appendChild(gridCell)   
    }
}

createGrid(16)

function addHoverEffect(){
    const gridCells = document.querySelectorAll('.grid-cell')
    gridCells.forEach((cell) => {
        cell.addEventListener('mousedown', () =>{
            mouseHeld = true
        })
    })

    gridCells.forEach((cell) => {
        cell.addEventListener('mouseup', () =>{
            mouseHeld = false
        })
    })

    gridCells.forEach((cell) => {
        cell.addEventListener('mousemove', () =>{
            if(mouseHeld == true){
                cell.style.backgroundColor = 'black'
            }
        })
    })
}

addHoverEffect()

