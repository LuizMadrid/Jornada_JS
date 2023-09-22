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

/* ----========---- ----========---- ----========---- */

// ? First Class Functions.
// * Possibilita que uma função pode ser tratada como uma variavel como fizemos com [arrow functions].
// * Por exemplo, uma função pode ser passada como parâmetro para outra função, assim como pode ser retornada por uma função e esse retorno pode ser atribuído a uma variável.

// ? High Order Functions.
// * É uma função que recebe outra função como parâmetro/argumento, ou uma função que retorna outra função.
