import { createButtons } from './buttonModule.js';
import { updateDisplay } from './displayModule.js';

const contentGrid = document.querySelector("#content");

const createDivs = buttons => {
    const divs = [];

    const numericDiv = document.createElement("div");
    numericDiv.classList.add("numeric_div");
    numericDiv.classList.add("col-8");

    buttons.forEach(button => numericDiv.appendChild(button));

    const operatorDiv = document.createElement("div");
    operatorDiv.classList.add("operator_div"); 
    operatorDiv.classList.add("col-4");

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

export { createContent };
