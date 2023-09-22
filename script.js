const gridContainer = document.querySelector('.grid-container')
const inputValue = document.querySelector('.input-value')
const colorPicker = document.querySelector('.color-picker')
const clearButton = document.querySelector('.clear-button')
const drawButton = document.querySelector('.draw-button')
const eraserButton = document.querySelector('.eraser-button')
const randomColorButton = document.querySelector('.random-color-button')
const buttons = [drawButton, eraserButton, randomColorButton];
let eraserMode = false
let mouseHeld = false
let drawingMode = true
let randomColorMode = false

setTimeout(() => {
    drawButton.click();
}, 0)

function setActiveButton(button) {
    buttons.forEach((btn) => {
        if (btn === button) {
            btn.classList.add('active-button')
        } else {
            btn.classList.remove('active-button')
        }
    })
}

drawButton.addEventListener('click', () => {
    setActiveButton(drawButton)
    drawingMode = true
    eraserMode = false
    randomColorMode = false
});

eraserButton.addEventListener('click', () => {
    setActiveButton(eraserButton);
    drawingMode = false
    eraserMode = true
    randomColorMode = false
});

randomColorButton.addEventListener('click', () => {
    setActiveButton(randomColorButton);
    drawingMode = false
    eraserMode = false
    randomColorMode = true
});

clearButton.addEventListener('click', () => {
    buttons.forEach((btn) => {
        btn.classList.remove('active-button');
    })
    drawButton.click();
})

function createGrid(size) {
    gridContainer.innerHTML = ''
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size * size; i++) {
        const gridCell = document.createElement('div')
        gridCell.classList.add('grid-cell')
        gridContainer.appendChild(gridCell)
    }
}

createGrid(16)

function randomizeColor() {
    const randomR = Math.floor(Math.random() * 256)
    const randomG = Math.floor(Math.random() * 256)
    const randomB = Math.floor(Math.random() * 256)
    return `rgb(${randomR}, ${randomG}, ${randomB})`
}

function addHoverEffect() {
    const gridCells = document.querySelectorAll('.grid-cell')
    gridContainer.addEventListener('mousedown', () => {
        mouseHeld = true
    })

    gridContainer.addEventListener('mouseup', () => {
        mouseHeld = false
    })

    gridCells.forEach((cell) => {
        cell.addEventListener('mousedown', () => {
            if (drawingMode) {
                const selectedColor = colorPicker.value
                cell.style.backgroundColor = selectedColor
            } else if (eraserMode) {
                eraserMode = true
                cell.style.backgroundColor = ''
            } else if (randomColorMode) {
                const randomColor = randomizeColor()
                cell.style.backgroundColor = randomColor
            }
        })

        cell.addEventListener('mousemove', () => {
            if (mouseHeld) {
                if (drawingMode) {
                    const selectedColor = colorPicker.value
                    cell.style.backgroundColor = selectedColor
                } else if (eraserMode) {
                    cell.style.backgroundColor = ''
                } else if (randomColorMode) {
                    const randomColor = randomizeColor()
                    cell.style.backgroundColor = randomColor
                }
            }
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
    document.getElementById('gridSizeValue').textContent = `${newSize}x${newSize}`
})

clearButton.addEventListener('click', () => {
    const gridCells = document.querySelectorAll('.grid-cell')
    gridCells.forEach((cell) => {
        cell.style.backgroundColor = ''
    })
})

