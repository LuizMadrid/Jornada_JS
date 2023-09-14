/* Avançando em JS */

// map, filter, reduce, find, include -> arrow function.

let numeros = [1, 2, 3, 4, 5, 6];

// find => retorna o primeiro elemento do criterio.
let numeroPar = numeros.find((num) => num % 2 === 0);

console.log(numeroPar);

// filter => retorna os elementos que batem com o criterio.
let numerosPares = numeros.filter((num) => num % 2 === 0);

console.log(numerosPares);

/* ----=========---- ----=========---- ----=========---- ----=========---- */

// Manipulação de strings

let frase = " Olá, mundo! ";

console.log(frase.trim());

let frase2 = "JavaScript é incrivel!";

console.log(frase2.startsWith("Java"));
console.log(frase2.endsWith("l!"));

/* ----=========---- ----=========---- ----=========---- ----=========---- */

// ExceçÕes e tratamentos de erros.

let idade = 15;

/* if (idade < 18) {
  throw new Error("Você deve possuir pelo menos 18 anos!");
} */

try {
  let idade = 15;

  if (idade < 18) {
    throw new Error("Você deve possuir pelo menos 18 anos!");
  }
} catch (error) {
  console.log(error.message);
}
/* O bom do [try catch] é que ele não interrompe o funcionamento. */

/* ----=========---- ----=========---- ----=========---- ----=========---- */

// Callback => função.
// O objetivo do callback é não bloquear a execução do código enquanto outra atividade é executada.

function cumprimentar(nome, callback) {
  console.log("Olá, " + nome);
  callback();
}

function mostrarSaudacao() {
  console.log("Como você está?");
}

cumprimentar("Luiz", mostrarSaudacao);
/* [callback] dependendo da função que for ela vai ser executado */

/* Acontece em [callback] muitas vezes a função anonima. */
cumprimentar("Aya", function () {
  console.log("Testa ai!");
});
/* Ela é disparada pois solicita a função pai */
// cumprimentar é uma função já criada, onde uma nova função é criada dentro dela, isso é callback.

/* ----=========---- ----=========---- ----=========---- ----=========---- */

// settimeout [executa alguma coisa depois de um determinado tempo somente uma vez].

function mostrarMensagem() {
  console.log("Essa mensagem vai ser exibida após 3 segundos.");
}

setTimeout(mostrarMensagem, 3000);
// ou com callback
setTimeout(function () {
  console.log("Essa mensagem só aparece depois de 8 segundos.");
}, 8000);

/* ----=========---- ----=========---- ----=========---- ----=========---- */

// Promises

let promessa = new Promise((resolve, reject) => {
  const condicao = true;

  if (condicao) {
    resolve("A condição é verdadeira!");
  } else {
    reject("A condição é false!");
  }
});

promessa
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.log(erro);
  });
// [promise] não é comumente usado no dia a dia, usamos async, await.
