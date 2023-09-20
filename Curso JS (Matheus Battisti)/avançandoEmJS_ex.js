// Exercicio 1: Manipulação de Array's - push(), shift().
// Crie uma lista de comprar que é inicialmente vazia. Adicione 5 itens á lista usando push(). Agora, remova o primeiro item da lista usando shift(). Imprima a lista final no console.

const listaDeCompras = [];

listaDeCompras.push("Ovos", "Mamão", "Peixe", "Conhaque", "Pão");

listaDeCompras.shift();

console.log(listaDeCompras);

// Exercicio 2: Manipulação de Array's - find().
// Você tem um array de numeros: [3, 7, 14, 21, 29, 36, 42]. Use a função find() para encontrar o primeiro numero que é divisivel por 7 e maior que 10.

const arrayDeNumeros = [3, 7, 14, 21, 29, 36, 42];

const primeiroNumeroDivisivel = arrayDeNumeros.find(
  (num) => num > 10 && num % 7 === 0
);

console.log(primeiroNumeroDivisivel);

// Exercicio 3: Manipulação de Array's - filter().
// Dado o array de numeros: [5, 10, 15, 20, 25, 30, 35, 40]. Use a função filter() para criar um novo array que contenha apenas os numeros que são maiores que 20.

const arrayNumeral = [5, 10, 15, 20, 25, 30, 35, 40];

const novoArrayNumeral = arrayNumeral.filter((num) => num > 20);

console.log(novoArrayNumeral);

// Exercicio 4: Manipulação de String's - split(), trim().
// Dada a string: " Bom dia, mundo! ". Remova os espaços em branco do inicio e no final da string e em seguida, divida a string em palavras.

const string1 = " Bom dia, mundo! ";

const stringNova = string1.trim().split(" ");
console.log(stringNova);

// Exercicio 5: Manipulação de String - startsWith(), endsWith().
// Dada a string: "O rato roeu a roupa do rei de Roma". Verifique se a string começa com a palavra "O" e termina com a palavra "Roma".

const frase2 = "O rato roeu a roupa do rei de Roma";

console.log(frase2.startsWith("O"));
console.log(frase2.endsWith("Roma"));
