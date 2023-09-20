const gridContainer = document.querySelector('.grid-container')
const inputValue = document.querySelector('.input-value')
const colorPicker = document.querySelector('.color-picker')
const clearButton = document.querySelector('.clear-button')
const eraserButton = document.querySelector('.eraser-button')
let eraserMode = false
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
        eraserMode = false
    })

    gridCells.forEach((cell) => {
        cell.addEventListener('mousemove', () =>{
            if (eraserMode){
                cell.style.backgroundColor = 'white';
            }
            else if(mouseHeld == true){
                selectedColor = colorPicker.value
                cell.style.backgroundColor = selectedColor
            }
        })
    })
}

addHoverEffect()

inputValue.addEventListener('input', () => {
    const newSize = parseInt(inputValue.value)
    createGrid(newSize)
    addHoverEffect()
})

clearButton.addEventListener('click', () => {
    const gridCells = document.querySelectorAll('.grid-cell')
    gridCells.forEach((cell) => {
        cell.style.backgroundColor = ''
    })
})

eraserButton.addEventListener('click', () =>{
    eraserMode = !eraserMode
})
