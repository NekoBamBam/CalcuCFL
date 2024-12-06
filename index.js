const visor = document.getElementById("resultado");
const btnNum = document.querySelectorAll(".btnNum");
const btnOp = document.querySelectorAll(".btnOp");
const btnAC = document.querySelector("#allClear");

function sumar(a, b) {
  let suma = a + b;
  return suma;
}
function restar(a, b) {
  let resta = a - b;
  return resta;
}
function multiplicar(a, b) {
  let mult = a * b;
  return mult;
}
function dividir(a, b) {
  let divi = a / b;
  return divi;
}

let firstNum = [];
let secondNum = [];
let subTotal = 0;
let operacion = undefined;
let historia = "";

btnNum.forEach((e) => {
  e.addEventListener("click", () => {
    agregarAHistoria(e.textContent);
    if (operacion == undefined) {
      firstNum.push(e.textContent);
    } else {
      secondNum.push(e.textContent);
    }
    console.log(firstNum);
    console.log(secondNum);
  });
});

btnOp.forEach((e) => {
  e.addEventListener("click", () => {
    agregarAHistoria(e.textContent);
    if (e.textContent != "=") {
      if (operacion == undefined) {
        firstNum = parseInt(firstNum.join(""));
        console.log(firstNum);
        operacion = e.textContent;
      } else {
        secondNum = parseInt(secondNum.join(""));
        switch (operacion) {
          case "+":
            subTotal = sumar(firstNum, secondNum);
            secondNum = [];
            break;
          case "-":
            subTotal = restar(firstNum, secondNum);
            secondNum = [];
            break;
          case "x":
            subTotal = multiplicar(firstNum, secondNum);
            secondNum = [];
            break;
          case "÷":
            subTotal = dividir(firstNum, secondNum);
            secondNum = [];
            break;
          default:
            break;
        }
        firstNum = subTotal;
        operacion = e.textContent;
      }
    } else {
      secondNum = parseInt(secondNum.join(""));
      switch (operacion) {
        case "+":
          subTotal = sumar(firstNum, secondNum);

          break;
        case "-":
          subTotal = restar(firstNum, secondNum);

          break;
        case "x":
          subTotal = multiplicar(firstNum, secondNum);
          break;
        case "÷":
          subTotal = dividir(firstNum, secondNum);
          break;
        default:
          break;
      }
      agregarAHistoria(subTotal);
    }
  });
});

btnAC.addEventListener("click", clearAll);

function agregarAHistoria(char) {
  historia = historia.concat(char);
  return (visor.textContent = historia);
}

function clearAll() {
  firstNum = [];
  secondNum = [];
  subTotal = 0;
  operacion = undefined;
  historia = "";
  visor.textContent = "";
}
