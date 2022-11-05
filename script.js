const container = document.querySelector(".container");
container.style.cssText = "display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: auto;";

for (i = 1; i <= 16*16; i++) {
    const grid_div = document.createElement("div");
    grid_div.classList.add("etchBox");
    grid_div.id = `box${i}`
    container.appendChild(grid_div);
}

const etchBox = document.querySelectorAll(".etchBox");
for (let box of etchBox) {
    box.addEventListener("mouseleave", () => changeColor(box.id));
}

function changeColor(element) {
    const currentBox = document.getElementById(element);

    const colors = ["red", "blue", "pink", "green", "yellow"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    currentBox.style.backgroundColor = randomColor;
}
