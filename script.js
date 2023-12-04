function createGrid(){
    const container = document.querySelector('#container');
    for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
            let box = document.createElement('div');
            box.classList.add('box')
            container.appendChild(box);
        }
    }
}

createGrid();

boxes = document.querySelectorAll('.box');

boxes.forEach((box1) => {
    box1.addEventListener('mouseover', (event) => {
        box1.style.backgroundColor = 'black';
    })
});
