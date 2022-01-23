const container = document.querySelector('.container');
const clearBtn = document.querySelector('.clear-btn');
const gridBtn = document.querySelector('.grid-btn');

function createGrid(nBoxes) {
    if (Math.sqrt(nBoxes) > 4 && Math.sqrt(nBoxes) < 50) {
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
            box.remove();
        })
        container.style.gridTemplateRows = '';
        container.style.gridTemplateColumns = '';
        container.style.gridTemplateRows = `repeat(${Math.sqrt(nBoxes)}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${Math.sqrt(nBoxes)}, 1fr)`;
        for (let i = 0; i <= nBoxes - 1; i++) {
            const newBox = document.createElement('div');
            newBox.classList.add('box');
            container.append(newBox);
        }
        addEvents();
    } else {
        alert('Please select a size between 4 and 50');
    }

}

function addEvents() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseover', function () {
            box.classList.add('hovered');
        })
    })
    clearBtn.addEventListener('click', function () {
        boxes.forEach(box => {
            box.classList.remove('hovered');
        })
    })
}

createGrid(256);

gridBtn.addEventListener('click', function () {
    const size = prompt('Please select a new size (4 - 50): ')
    createGrid(size * size);
})

