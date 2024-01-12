const contentGrid = document.querySelector("#content");

const createButtons = () => {
    const buttons = [];

    for (let i = 0; i <= 9; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        const classButton = "numeric_button";
        button.classList.add(classButton);
        buttons.push(button);
    }

    const operators = ["+", "-", "*", "/"];
    operators.forEach(operator => {
        const button = document.createElement("button");
        const classButton = "operator_button";
        button.classList.add(classButton);
        button.textContent = operator;
        buttons.push(button);
    });

    return buttons;
};

const createContent = () => {
    const buttons = createButtons();

    buttons.forEach(button => {
        contentGrid.appendChild(button);
    });
};

createContent();
