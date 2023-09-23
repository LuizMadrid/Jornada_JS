// HIGH ORDER FUNCTION EM ARRAYS.
const numeros = [40, 34, 10, 67, 89, 23, 10];

// * array.forEach() - Ütil para percorrer um array.

numeros.forEach((elemento, indice) => {
  console.log(`Indice: ${indice}, foi encontrado o número ${elemento}.`);
});
// Ela recebe a função e passa por cada elemento(forEach) do array(numeros) e pra cada elementos ele executa o console.log().

// * array.find() - Ütil para encontrar um elemento dentro do array.

// ? Ele ira mostrar o primeiro elemento que base com a procura.
const encontrado = numeros.find((numero) => {
  return numero === 10;
});

console.log(); // Pular linha no console.
console.log(encontrado);
console.log(); // Pular linha no console.

// ? Caso queira que mostre todos os numeros que são identicos a 10 seria assim.

numeros.find((numero, indice) => {
  if (numero === 10) {
    console.log(`Indice: ${indice}, foi encontrado o ${numero}.`);
  }
});

console.log(); // Pular linha no console.

// ? Exemplo de array de objetos.
const pessoas = [
  {
    nome: "pessoa1",
    idade: 20,
    profissao: "Motorista",
  },
  {
    nome: "Pessoa2",
    idade: 89,
    profissao: "Aposentado/Pensionista",
  },
  {
    nome: "Pessoa3",
    idade: 48,
    profissao: "TikToker",
  },
];

pessoas.find((pessoa, indice) => {
  if (pessoa.idade > 40) {
    console.log(indice, pessoa);
  }
});
