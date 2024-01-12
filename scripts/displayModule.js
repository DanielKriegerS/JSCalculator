const displayElement = document.querySelector("#display");

const updateDisplay = (text) => {
    displayElement.textContent = text;
};

export { updateDisplay };
