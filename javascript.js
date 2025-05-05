button = document.querySelector(".popup");
container = document.querySelector(".container");

for (let i = 1; i <= 256; i++) {
    div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("square");
}

let squares = document.querySelectorAll('.container > div');

squares.forEach((x) => {
    x.addEventListener("mouseenter", (e) => {
        x.style.backgroundColor = 'red';
    });
});


function newGrid(number) {
    for (let i = 1; i <= number*number; i++) {
        div = document.createElement("div");
        div.classList.add("square");
        div.style.width = (800/number) + 'px'
        div.style.height = (800/number) + 'px'
        container.appendChild(div);
    }

    squares = document.querySelectorAll('.container > div');

    squares.forEach((x) => {
        x.addEventListener("mouseenter", (e) => {
            x.style.backgroundColor = 'red';
        });
    });
}

function removeGrid() {
    for (const square of squares) {
        square.remove();
    }
}

function changeGridSize(numberOfSquares) {
    removeGrid();
    newGrid(numberOfSquares);
}

button.addEventListener("click", () => {
    let numberOfSquares = prompt("Please enter a number of squares for your grid (1 - 100):", 16);
    if ((numberOfSquares > 100) || (numberOfSquares < 1)) {
        alert("Please enter a number greater than 1 and less than 100.")
    } else {
        changeGridSize(numberOfSquares); 
    }
});