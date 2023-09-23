// HIGH ORDER FUNCTION EM ARRAYS.
const numeros = [40, 34, 10, 67, 89, 23, 10];
const numeros2 = [-4, -1, 7, -3, 5, -7, -4];

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
    console.log(`Indice: ${indice}, foi encontrado o ${numero} que é a condição.`);
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

// * array.every() - Ütil para verificar se os elementos do array seguem uma determinada condição.

const tudoPositivo = numeros.every((elemento) => elemento > 0);

console.log(); // Pular linha no console.
console.log(tudoPositivo);

// Se todos os elementos forem maior que 0, retorna true, caso um não for retorna false.

// * array.some() - Ütil para verificar se nos elementos do array uma determinada condição se mostre TRUE.

const retorno = numeros2.some((numero, indice) => numero > 0);

console.log(retorno);
console.log(); // Pular linha no console.

// * array.map() - Útil para percorrer um outro array e transformar ele em outro array por elementos que foram retornados a cada interação.

const novoArray = numeros.map((elementos) => {
  return elementos + 5;
});

// ? Caso queria transformar um array já existente elevando eles ao quadrado.

let valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8];

console.log(valores.map((elementos) => elementos ** 2));
console.log(); // Pular linha no console.

// ? Como adicionar uma propriedade aos objetos do array.

const carrinho = [
  { produto: "Feijão", preco: 7.98, quantidade: 3 },
  { produto: "Arroz", preco: 4.99, quantidade: 5 },
  { produto: "Cachaça", preco: 26.89, quantidade: 2 },
];

const carrinhoComTotal = carrinho.map((itemDoCarrinho) => {
  return {
    ...carrinho,
    total: itemDoCarrinho.preco * itemDoCarrinho.quantidade,
  };
});

console.log(carrinhoComTotal);
console.log(); // Pular linha no console.

// * array.filter() - Útil para reduzir arrays de um array original.

const novoArray2 = valores.filter((valor) => valor % 2 === 0);

console.log(novoArray2);
console.log(); // Pular linha no console.

// ? Como filtrar para que mostre somente os alunos que tiveram uma media maior que 85.

const alunos = [
  { nome: "Aya", media: 78 },
  { nome: "Kassandra", media: 62 },
  { nome: "Connor", media: 85 },
  { nome: "Ezio", media: 92 },
  { nome: "Altair", media: 100 },
];

console.log(alunos.filter((aluno) => aluno.media >= 85));
console.log(); // Pular linha no console.

// ? Filtrar por produtos que custam menos de 10 reais, e não são bebidas.

const produtos = [
  { nome: "Suco de Laranja", preco: 7.5, tipo: "Bebida" },
  { nome: "Batata Frita", preco: 10.7, tipo: "Comida" },
  { nome: "Pizza", preco: 42.35, tipo: "Comida" },
  { nome: "Kit-Kat", preco: 1.5, tipo: "Comida" },
  { nome: "Pastel", preco: 4.89, tipo: "Comida" },
  { nome: "Cola-Cola 2L", preco: 8.98, tipo: "Bebida" },
];

console.log(produtos.filter((produto) => produto.preco < 10 && produto.tipo !== "Bebida"));
console.log(); // Pular linha no console.

// * array.reduce() - Útil para transformas um array pelo parametro passado, em um elemento unico.

// ? Se quiser calcular a soma dos elementos pertecentes a um array.
const numeros3 = [1, 2, 3, 4, 5];

const soma = numeros3.reduce((acumulador, elemento) => {
  return elemento + acumulador;
}, 0);

console.log(`A soma de todos os elementos do array é de: ${soma}.`);
console.log(); // Pular linha no console.

// ? Calcular a media dos elementos pertencentes a um array.

const soma2 = numeros3.reduce((acumulador, elemento, _, arrayCompleto) => {
  return elemento / arrayCompleto.length + acumulador;
}, 0);

console.log(`A media é de: ${soma2}.`);
console.log(); // Pular linha no console.

// ? Somar somente os pares de um array.

const somaDosPares = numeros3.reduce((acumulador, elemento) => {
  if (elemento % 2 === 0) {
    return elemento + acumulador;
  } else {
    return acumulador;
  }
}, 0);

console.log(`A soma dos numeros pares do array é de: ${somaDosPares}.`);
console.log(); // Pular linha no console.

// ? Configurar um carrinho para o total a pagar.

const carrinhoTotalAPagar = carrinho.reduce((acumulador, elemento) => {
  return elemento.preco * elemento.quantidade + acumulador;
}, 0);

console.log(`O preço total é de: R$ ${parseInt(carrinhoTotalAPagar)} reais.`);
