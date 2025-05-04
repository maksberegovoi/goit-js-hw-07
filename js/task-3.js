const input = document.querySelector("#name-input");
const greetingText = document.querySelector("#name-output");

const handleInput = (event) => {
    if (!event.currentTarget.value.trim()) {
        greetingText.textContent = "Anonymous";
    } else {
        greetingText.textContent = event.currentTarget.value.trim();
    }
};

input.addEventListener("input", handleInput);
