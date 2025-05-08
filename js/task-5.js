function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const bgButton = document.querySelector(".change-color");
const bgColorText = document.querySelector(".color");

bgButton.addEventListener("click", (event) => {
    const bgColor = getRandomHexColor();
    bgColorText.textContent = bgColor;
    document.body.style.backgroundColor = bgColor;
});
