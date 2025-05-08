function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const inputArea = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createButton.addEventListener("click", () => {
    const inputValue = Number(inputArea.value);
    if (inputValue > 0 && inputValue <= 100) {
        destroyBoxes();
        boxesContainer.append(createBoxes(inputValue));
        inputArea.value = "";
    }
});

destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
    const boxesContent = document.createDocumentFragment();
    let boxSize = 30;
    for (let i = 1; i <= amount; i++) {
        const box = document.createElement("div");
        box.classList.add(`box-${i}`);
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = getRandomHexColor();

        boxSize += 10;
        boxesContent.append(box);
    }
    return boxesContent;
}

function destroyBoxes() {
    boxesContainer.innerHTML = "";
}
