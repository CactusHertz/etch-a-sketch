function createGrid(){
    const container = document.querySelector('#container');
    for(let i = 0; i < 16; i++){
        let row = document.createElement('div');
        for(let j = 0; j < 16; j++){
            let box = document.createElement('div');
            box.textContent = i + " " + j;
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

createGrid();