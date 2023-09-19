const gridContainer = document.querySelector('.grid-container')
const slider = document.querySelector('.slider')
const inputValue = document.querySelector('.input-value')
let mouseHeld = false

function createGrid(size){
    gridContainer.innerHTML = ''
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for(let i=0; i<=size*size; i++){
        const gridCell = document.createElement('div')
        gridCell.classList.add('grid-cell')
        gridContainer.appendChild(gridCell)   
    }
}

createGrid(16)

function addHoverEffect(){
    const gridCells = document.querySelectorAll('.grid-cell')
    gridContainer.addEventListener('mousedown', () => {
        mouseHeld = true
    })

    gridContainer.addEventListener('mouseup', () => {
        mouseHeld = false
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

inputValue.addEventListener('input', () => {
    const newSize = parseInt(inputValue.value)
    createGrid(newSize)
    addHoverEffect()
});

