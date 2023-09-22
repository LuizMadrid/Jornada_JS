//  HIGH ORDER FUNCTIONS.
// ? EXEMPLOS.

// * Exemplo 01: Uma função que retorna outra função como parametro.

function welcome(courseName) {
  return (studentName) => {
    console.log(`Olá, ${studentName}, Seja bem vindo(a) ao curso de ${courseName}!`);
  };
}

const displayWelcomeToFrontEndCourse = welcome("Front-end em React");
const displayWelcomeToBackEndCourse = welcome("Back-end em Node.js");

displayWelcomeToFrontEndCourse("Luiz Madrid");

// * Exemplo 02: Uma função que recebe outra função como parametro.

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

const calcular = (num1, num2, operacao) => operacao(num1, num2);

console.log(calcular(3, 5, somar));

// ? Um calculo customizado: (num1 * num2) + (2 * num1 * num2)

console.log(calcular(10, 5, (num1, num2) => num1 * num2 + 2 * num1 * num2));
// ou colocar em uma variavel.
const resultado = calcular(10, 5, (num1, num2) => num1 * num2 + 2 * num1 * num2);

console.log(`Resultado por variavel: ${resultado}`);
