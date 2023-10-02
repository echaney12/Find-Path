const N = 25;
const M = 50;

function drawGrid() {
    for(let i=0; i<N; i++) {
        for(let j=0; j<M; j++) {
            let tile = document.createElement('div');
            tile.id =`${i}-${j}`;
            tile.classList.add('tile');
            tile.innerText = `${i}-${j}`;
            document.getElementById('grid').appendChild(tile);
        }
    }
}

drawGrid();