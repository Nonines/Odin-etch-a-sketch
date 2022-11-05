const container = document.querySelector(".container");

for (i = 1; i <= 16*16; i++) {
    const grid_div = document.createElement("div");
    // grid_div.textContent = i;
    grid_div.classList.add("box");
    container.appendChild(grid_div);
}
