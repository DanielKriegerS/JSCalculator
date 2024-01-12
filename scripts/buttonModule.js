const createButtons = () => {
    const buttons = [];

    for (let i = 0; i <= 9; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        const classButton = "numeric_button";
        button.classList.add(classButton);
        buttons.push(button);
    }

    const equalsButton = document.createElement("button");
    equalsButton.textContent = "=";
    const classEqualsButton = "equals_button"; 
    equalsButton.classList.add(classEqualsButton);
    buttons.push(equalsButton);

    const operators = ["+", "-", "*", "/"];
    operators.forEach(operator => {
        const button = document.createElement("button");
        button.textContent = operator;
        const classOperatorButton = "operator_button";
        button.classList.add(classOperatorButton);
        buttons.push(button);
    });

    return buttons;
};

export { createButtons };
