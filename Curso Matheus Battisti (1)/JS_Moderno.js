// let e const
// Por que usamos em codigos mais recentes.

function testeVar() {
  var x = 1;

  if (true) {
    var x = 2;

    console.log(`Dentro do if x é: ${x} em VAR`);
  }

  console.log(`Fora do if x é: ${x} em VAR`);
}

function testeLet() {
  let x = 1;

  if (true) {
    let x = 2;

    console.log(`Dentro do if x é: ${x} em LET`);
  }

  console.log(`Fora do if x é: ${x} em LET`);
}

testeVar();
testeLet();

// Arrow functions - Como usar.
// [arrow functions] nativamentes são funções anonimas. E também não é necessario chaves para declarar um bloco.

const soma = (a, b) => a + b;
console.log(soma(8, 2));

const quadrado = (numero) => numero * numero;
console.log(quadrado(4));

// Ou também usando chaves como functions normais.
const cumprimento = (nome) => {
  const mensagem = `Olá, ${nome} seja bem vindo(a)`;
  return mensagem;
};

console.log(cumprimento("Luiz"));

// Template literals.
const nome2 = "Roberto";
const idade = 8;

console.log(`Meu nome é ${nome2}, e eu tenho ${idade} anos.`);

// Destructuring.
const pessoa = { nome: "Aya", idade: 28, profissao: "Exploradora" };
const { nome: nome3, idade: idade3, profissao } = pessoa;

console.log(nome3, profissao);

// Spread operator.
const array1 = [1, 2, 3, 4];
const array2 = [...array1, 5, 6];

console.log(array2);

// Usar o spread pra fazer uma função com argumentos inderteminados.
const soma2 = (...args) => args.reduce((total, numero) => total + numero, 0);

console.log(soma2(1, 2, 3, 4, 5));

// Default parameters.
function saudacao(nome = "Visitante") {
  console.log(`Olá, ${nome}! Sejá bem vindo(a)`);
}

saudacao();
saudacao("Luiz");
// Caso não especificar um parametro, ele vai usar o parametro inicial indicado.

// Melhorias do objects literals.
const nomeNovo = "Matheus";
const idadeNova = 27;

const pessoaNova = { nome: nomeNovo, idade: idadeNova };

console.log(pessoaNova);

const metodoPessoa = {
  dizerOi() {
    console.log("Oi!");
  },
};

metodoPessoa.dizerOi(); // Oi!

// Array Methods (map, filter, reduce).

const numerosNovos = [1, 2, 3, 4, 5];
const dobrados = numerosNovos.map((numero) => numero * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]

const pares = numerosNovos.filter((numero) => numero % 2 === 0);
console.log(pares); // [2, 4]

const somaReduce = numerosNovos.reduce((total, numero) => total + numero, 0);
console.log(soma); // 15

// Classes e Heranças.
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Oi, meu nome é ${this.nome}.`);
  }
}

const pessoa1 = new Pessoa("Carlos", 25);
pessoa1.falar(); // Oi, meu nome é Carlos.

/* --- */

class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade);
    this.salario = salario;
  }

  falar() {
    super.falar();
    console.log(`Eu ganho R$${this.salario}.`);
  }
}

const funcionario1 = new Funcionario("Ana", 30, 5000);

funcionario1.falar(); // Oi, meu nome é Ana. Eu ganho R$5000.
