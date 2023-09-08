/* Objetos */
/* Como criar um objeto */

let pessoa = {
  nome: "Luiz Madrid",
  idade: 22,
  sexo: "Masculino",
  "nome-do-responsavel": "Steve Jobs",
  /* Forma diferente (caracteres especiais) */
};

console.log(pessoa);
console.log();
console.log(pessoa.nome);
console.log();
console.log(pessoa.sexo);
console.log();
console.log(pessoa["nome-do-responsavel"]);
/* Pelo caractere especial é feito diferente */

/* Como criar um objeto */

/* =============================================================================== */
console.log();
console.log(`----------------------------------------------------------------`);
console.log();
/* =============================================================================== */

/* Adicionar uma nova chave ao objeto */

pessoa.altura = 1.75;

console.log(pessoa);

/* Adicionar uma nova chave ao objeto */

/* Remover uma nova chave ao objeto */

delete pessoa.altura;

console.log(pessoa);

/* Remover uma nova chave ao objeto */

/* =============================================================================== */
console.log();
console.log(`----------------------------------------------------------------`);
console.log();
/* =============================================================================== */

/* Percorrendo um objeto */

for (let chave in pessoa) {
  console.log(chave);
}

/* Percorrendo um objeto */
