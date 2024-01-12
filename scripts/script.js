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

const createDivs = buttons => {
    const divs = [];

    const numericDiv = document.createElement("div");
    numericDiv.classList.add("numeric_div");

    buttons.forEach(button => numericDiv.appendChild(button));

    const operatorDiv = document.createElement("div");
    operatorDiv.classList.add("operator_div");

    buttons.filter(button => button.classList.contains("operator_button"))
           .forEach(button => operatorDiv.appendChild(button));

    divs.push(numericDiv, operatorDiv);

    return divs;
};

const createContent = () => {
    const buttons = createButtons();
    const divs = createDivs(buttons);

    divs.forEach(div => {
        contentGrid.appendChild(div);
    });
};

createContent();
