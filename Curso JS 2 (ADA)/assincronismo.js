const fs = require("fs"); // do node.js pra ler arquivos.

function lerArquivoPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile("Jornada_JS/Curso JS 2 (ADA)/arquivo.txt", (erro, conteudo) => {
      if (erro) {
        reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
      } else {
        resolve(String(conteudo));
      }
    });
  });
}

// * 1. Callbacks.

/* 

console.log("ANTES de entrar na callback.");

fs.readFile("Jornada_JS/Curso JS 2 (ADA)/arquivo.txt", (erro, conteudo) => {
  if (erro) {
    console.log("Ocorreu um erro ao tentar ler o arquivo:", erro);
  } else {
    console.log(String(conteudo));
  }
});

*/

console.log("DEPOIS de entrar na callback.");

// * 2. Promises.
// ? A promise é um objeto que guarda uma promessa de que algo será realizado. É útil para os casos em que estamos lidando com operações assíncronas. A promise estará em algum dos estados abaixo:
// 1. Pending: A promise foi iniciada, mas está pendente.
// 2. Fullfilled: A promise foi concretizada com sucesso.
// 3. Reject: A promise foi rejeitada, porque houve um erro.

/* 

console.log("ANTES de entrar na promise.");

lerArquivoPromise()
  .then((resultadoDaPromessa) => {
    console.log(resultadoDaPromessa);
  })
  .catch((erro) => {
    console.log("Deu ruim:", erro);
  });

console.log("DEPOIS de entrar na promise.");

*/

// * 3. Async/Await.

async function leituraDeDadosAssincrono() {
  console.log("ANTES de entrar na Await.");

  try {
    const retornoDaPromessa = await lerArquivoPromise();

    console.log(retornoDaPromessa);
    console.log("DEPOIS de entrar na Await.");
  } catch (error) {
    console.log(error);
    console.log("DEPOIS de entrar na Await (com erro).");
  }
}

leituraDeDadosAssincrono();
