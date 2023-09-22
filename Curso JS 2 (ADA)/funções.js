// * Exemplo 01: Como funciona a [function].
function saudacao(nomeDoUsario, nomeDoCurso) {
  return `Olá, ${nomeDoUsario} seja bem vindo(a)! Você irá cursar ${nomeDoCurso} certo ?`;
}

const mensagemDeSaudacao = saudacao("Luiz Madrid", "Front-End em React e TS");
console.log(mensagemDeSaudacao);

/* ----========---- */

// * Exemplo 02: Funções Anonimas.
const dobroDoNumero = function (num) {
  return num * 2;
};

const dobro = dobroDoNumero(4);
console.log(dobro);

/* ----========---- */

// * Exemplo 03: Arrow Functions.
const subtrair = (num1, num2) => {
  return num1 - num2;
};

console.log(subtrair(8, 3));

// ? Se caso a função não precise de mais de uma linha é possivel fazer assim.
const multiplicar = (num1, num2) => num1 * num2;

console.log(multiplicar(3, 3));
