function createGrid(gridWidth){
    const container = document.querySelector('#container');
    let numBoxes = gridWidth * gridWidth;
    let ratio = 100 / gridWidth;
    
    for(let i = 0; i < numBoxes; i++){
        let box = document.createElement('div');
        box.classList.add('box')   
        box.style.flex = '1 0 ' + ratio + '%';
        container.appendChild(box);
    }

    boxes = document.querySelectorAll('.box');
    boxes.forEach((box1) => {
        box1.addEventListener('mouseover', (event) => {
            box1.style.backgroundColor = 'black';
        })
    });
}

function deleteGrid(){
    const container = document.querySelector('#container');
    container.innerHTML = '';
}

function promptUser(){
    let size = prompt('Please enter grid width (max is 100):');
    if (size > 100){
        size = 100;
    }
    if (size < 1) {
        size = 1;
    }

    deleteGrid();
    createGrid(size);
}

createGrid(16);

editButton = document.querySelector('button');
editButton.addEventListener('click', () => {
    promptUser();
});
