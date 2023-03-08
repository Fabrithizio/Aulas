const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

let currentNumber = "";
let firstNumber = null;
let secondNumber = null;
let operator = null;

buttons.forEach(button => {
  button.addEventListener("click", e => {
    const buttonValue = e.target.textContent;

    if (buttonValue === "C") {
      clearDisplay();
    } else if (isNumber(buttonValue)) {
      handleNumber(buttonValue);
    } else if (isOperator(buttonValue)) {
      handleOperator(buttonValue);
    } else if (buttonValue === "=") {
      handleEquals();
    }
  });
});

function isNumber(value) {
  return !isNaN(parseFloat(value));
}

function isOperator(value) {
  return value === "+" || value === "-" || value === "*" || value === "/";
}

function clearDisplay() {
    currentNumber = "";
    firstNumber = null;
    secondNumber = null;
    operator = null;
    updateDisplay("0");
  }
  
  function handleNumber(value) {
    currentNumber += value;
    updateDisplay(currentNumber);
  }
  
  function handleOperator(value) {
    if (firstNumber === null) {
      firstNumber = parseFloat(currentNumber);
      operator = value;
      currentNumber = "";
    } else {
      secondNumber = parseFloat(currentNumber);
      calculate();
      operator = value;
      currentNumber = "";
    }
  }
  
  function handleEquals() {
    if (firstNumber !== null && operator !== null && currentNumber !== "") {
      secondNumber = parseFloat(currentNumber);
      calculate();
      operator = null;
      currentNumber = "";
    }
  }
  
  function calculate() {
    let result;
    switch (operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        result = firstNumber / secondNumber;
        break;
      default:
        return;
    }
    updateDisplay(result);
    firstNumber = result;
  }
  
  function updateDisplay(value) {
    display.textContent = value;
  }
  
/* 
      -----DESTA MANEIRA É USADO UM OBJETO PARA FAZER A CALCULADORA EM VEZ DE VARIAS VARIAVES----
  const calculator = {
  display: document.querySelector(".display"),
  currentNumber: "",
  firstNumber: null,
  secondNumber: null,
  operator: null,
  
  isNumber(value) {
    return !isNaN(parseFloat(value));
  },

  isOperator(value) {
    return value === "+" || value === "-" || value === "*" || value === "/";
  },

  clearDisplay() {
    this.currentNumber = "";
    this.firstNumber = null;
    this.secondNumber = null;
    this.operator = null;
    this.updateDisplay("0");
  },

  handleNumber(value) {
    this.currentNumber += value;
    this.updateDisplay(this.currentNumber);
  },

  handleOperator(value) {
    if (this.firstNumber === null) {
      this.firstNumber = parseFloat(this.currentNumber);
      this.operator = value;
      this.currentNumber = "";
    } else {
      this.secondNumber = parseFloat(this.currentNumber);
      this.calculate();
      this.operator = value;
      this.currentNumber = "";
    }
  },

  handleEquals() {
    if (this.firstNumber !== null && this.operator !== null && this.currentNumber !== "") {
      this.secondNumber = parseFloat(this.currentNumber);
      this.calculate();
      this.operator = null;
      this.currentNumber = "";
    }
  },

  calculate() {
    let result;
    switch (this.operator) {
      case "+":
        result = this.firstNumber + this.secondNumber;
        break;
      case "-":
        result = this.firstNumber - this.secondNumber;
        break;
      case "*":
        result = this.firstNumber * this.secondNumber;
        break;
      case "/":
        result = this.firstNumber / this.secondNumber;
        break;
      default:
        return;
    }
    this.updateDisplay(result);
    this.firstNumber = result;
  },

  updateDisplay(value) {
    this.display.textContent = value;
  },

  init() {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
      button.addEventListener("click", e => {
        const buttonValue = e.target.textContent;

        if (buttonValue === "C") {
          this.clearDisplay();
        } else if (this.isNumber(buttonValue)) {
          this.handleNumber(buttonValue);
        } else if (this.isOperator(buttonValue)) {
          this.handleOperator(buttonValue);
        } else if (buttonValue === "=") {
          this.handleEquals();
        }
      });
    });
  }
};

calculator.init();
*/