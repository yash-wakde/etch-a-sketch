const gridContainer = document.querySelector('.grid-container')
const inputValue = document.querySelector('.input-value')
const colorPicker = document.querySelector('.color-picker')
const clearButton = document.querySelector('.clear-button')
const drawButton = document.querySelector('.draw-button')
const eraserButton = document.querySelector('.eraser-button')
let eraserMode = false
let mouseHeld = false
let drawingMode = true

drawButton.addEventListener('click', () => {
    drawingMode = true
    eraserMode = false
})

eraserButton.addEventListener('click', () => {
    drawingMode = false
    eraserMode = true
})

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
        mouseHeld = true})

    gridContainer.addEventListener('mouseup', () => {
        mouseHeld = false
        eraserMode = false })

    gridCells.forEach((cell) => {
    cell.addEventListener('mousedown', () => {
        if (drawingMode) {
            const selectedColor = colorPicker.value
            cell.style.backgroundColor = selectedColor} 
        else {
            eraserMode = true
            cell.style.backgroundColor = 'white'}
        })

    cell.addEventListener('mousemove', () => {
        if (mouseHeld) {
            if (drawingMode) {
                const selectedColor = colorPicker.value
                cell.style.backgroundColor = selectedColor} 
            else if (eraserMode) {
                cell.style.backgroundColor = '' }}                 
        })

    cell.addEventListener('mousedown', (e) => {
        e.preventDefault()
        })
    cell.addEventListener('mousemove', (e) => {
        e.preventDefault()
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