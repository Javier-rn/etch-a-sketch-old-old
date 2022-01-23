const container = document.querySelector('.container');
const clearBtn = document.querySelector('.clear-btn');
const gridRange = document.querySelector('.grid-range');

function createGrid(nBoxes) {
    container.style.gridTemplateRows = `repeat(${Math.sqrt(nBoxes)}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${Math.sqrt(nBoxes)}, 1fr)`;
    for (let i = 0; i <= nBoxes - 1; i++) {
        const newBox = document.createElement('div');
        newBox.classList.add('box');
        container.append(newBox);
    }
}

createGrid(256);

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseover', function (e) {
        box.classList.add('hovered');
    })
})

clearBtn.addEventListener('click', function () {
    boxes.forEach(box => {
        box.classList.remove('hovered');
    })
})

gridRange.addEventListener('input', function (e) {
    boxes.forEach(box => {
        box.remove();
    })
    createGrid(e.target.value);
})

