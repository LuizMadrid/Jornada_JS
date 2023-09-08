/* Como criar um array? */

let array = ["Nome", 22, 0.52, true];

/* Como criar um array? */

console.log(array);

/* =============================================================================== */
console.log();
console.log(`----------------------------------------------------------------`);
console.log();
/* =============================================================================== */

/* Acessando cada elemento separado */

console.log(`Primeiro elemento do array é ( ${array[0]} ) uma string.`);
console.log(`Segundo  elemento do array é ( ${array[1]} ) um númeral.`);
console.log(`Terceiro elemento do array é ( ${array[2]} ) um númeral.`);
console.log(`Quarto   elemento do array é ( ${array[3]} ) uma booleana.`);

/* Acessando cada elemento separado */

/* =============================================================================== */
console.log();
console.log(`----------------------------------------------------------------`);
console.log();
/* =============================================================================== */

/* Conhecendo o tamanho/qts_elementos do array */

console.log(`A quantidade de elementos do array é de: ${array.length}`);

/* Conhecendo o tamanho/qts_elementos do array */

/* =============================================================================== */
console.log();
console.log(`----------------------------------------------------------------`);
console.log();
/* =============================================================================== */

/* Percorrendo o array */

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

/* Percorrendo o array */

/* =============================================================================== */
console.log();
console.log(`----------------------------------------------------------------`);
console.log();
/* =============================================================================== */

let array1 = [30, 12, 29];
let array2 = []; /* Array vazio */

/* Fatiamento: slice */

console.log(
  array1.slice(0, 2)
); /* Pega o parametro 0(primeiro) e o paramentro menor que 2(segundo) */

/* Fatiamento: slice */

/* =============================================================================== */
console.log();
console.log(`----------------------------------------------------------------`);
console.log();
/* =============================================================================== */

/* Adicionando elementos no array: push/unshift */

console.log("Antes de adicionar um elemento no array: ", array2);

array2.push(20, 15); /* Adiciona no final do array */
array2.unshift(50, 87); /* Adiciona no começo do array */

console.log("Depois de adicionar um elemento no array: ", array2);

/* Adicionando elementos no array: push/unshift */

/* =============================================================================== */
console.log();
console.log(`----------------------------------------------------------------`);
console.log();
/* =============================================================================== */

/* Removendo elementos no array: pop/unshift */

console.log("Antes de remover um elemento no array: ", array2);

array2.pop(); /* Remove o elemento final do array */
array2.shift(); /* Remove o elemento do começo do array */

console.log("Depois de remover um elemento no array: ", array2);

/* Removendo elementos no array: pop/shift */

/* =============================================================================== */
console.log();
console.log(`----------------------------------------------------------------`);
console.log();
/* =============================================================================== */

/* Concatenando elementos de array's: concat */

console.log(`Array 1 tem os números ${array1} de elementos.`);
console.log(`Array 2 tem os números ${array2} de elementos.`);

console.log();

console.log(`A concatenação deles é: ${array1.concat(array2)}.`);

/* Concatenando elementos de array's: concat */
