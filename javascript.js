let changeGridSizeBtn = document.querySelector(".popup");
let randomizeBtn = document.querySelector(".randomize");
let container = document.querySelector(".container");


function setdefaultGridColor() {
    squares.forEach((x) => {
        x.addEventListener("mouseenter", (e) => {
           x.style.backgroundColor = 'red';
        });
    });
}

function newGrid(number) {
    for (let i = 1; i <= number*number; i++) {
        div = document.createElement("div");
        div.classList.add("square");
        div.style.width = (800/number) + 'px'
        div.style.height = (800/number) + 'px'
        container.appendChild(div);
    }
    squares = document.querySelectorAll('.container > div');
    setdefaultGridColor();
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

changeGridSizeBtn.addEventListener("click", () => {
    let numberOfSquares = prompt("Please enter a number of squares for your grid (1 - 100):", 16);
    if ((numberOfSquares > 100) || (numberOfSquares < 1)) {
        alert("Please enter a number greater than 1 and less than 100.")
    } else {
        changeGridSize(numberOfSquares); 
    }
});

function randomizeColor() {
    squares.forEach((x) => {
        x.addEventListener("mouseenter", () => {
            let randomColor = String(`rgb(${Math.floor(Math.random() * 255)}, 
            ${Math.floor(Math.random() * 255)}, 
            ${Math.floor(Math.random() * 255)})`)
            x.style.backgroundColor = randomColor;
        });
    });
}

let randomizer = false;
randomizeBtn.addEventListener("click", () => {
    if (randomizer === true) {
        randomizer = false;
        setdefaultGridColor();
    } else if (randomizer === false) {
        randomizer = true;
        randomizeColor();
    }
});

newGrid(16);