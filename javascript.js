container = document.querySelector(".container");

for (let i = 1; i <= 256; i++) {
    div = document.createElement("div");
    container.appendChild(div);
    div.classList.add("square");
}

squares = document.querySelectorAll('.container > div');

squares.forEach((x) => {
    x.addEventListener("mouseenter", (e) => {
        x.style.backgroundColor = 'red';
    });
});

button = document.querySelector(".popup");

button.addEventListener("click", () => {
    let numberOfSquares = prompt("Please enter a number of squares for your grid:")
});