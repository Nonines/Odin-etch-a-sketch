function getUserNumber() {
    let squaresNum;
    while (true) {
        squaresNum = Number(prompt("How many squares would you like your Etch-box to have on each side?"));
        if (squaresNum <= 100 && squaresNum >= 1) {
            break;
        }
    }
    return squaresNum;
}

function changeColor(element) {
    const currentBox = document.getElementById(element);

    function randNum(limit=256) {return Math.floor(Math.random() * limit)};
    currentBox.style.backgroundColor = `rgb(${randNum()}, ${randNum()}, ${randNum()})`;
}

function getEtchSquares() {
    container.replaceChildren();
    createEtchBox(getUserNumber());
}

function createEtchBox(dimension = 16) {
    container.style.cssText = `display: grid; grid-template-columns: repeat(${dimension}, 1fr); grid-template-rows: auto;`;

    for (i = 1; i <= dimension ** 2; i++) {
        const grid_div = document.createElement("div");
        grid_div.classList.add("etchBox");
        grid_div.id = `box${i}`
        container.appendChild(grid_div);
    }

    const etchBox = document.querySelectorAll(".etchBox");
    for (let box of etchBox) {
        box.addEventListener("mouseleave", () => changeColor(box.id));
    }
}

const button = document.querySelector("button");
button.addEventListener("click", getEtchSquares);

const container = document.querySelector(".container");

createEtchBox();
