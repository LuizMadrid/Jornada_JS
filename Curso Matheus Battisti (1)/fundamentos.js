/* Fundamentos */

var nomeDaVariavel = "Valor da Variavel";

/* O termo [VAR] não é recomendavel usar, somente em sistemas legados(antigos). */
/* O caractere [=] é referente a atribuição do valor que ela tem (direita) para espaço criado (esquerda). */
/* Todo e qualquer valor, caractere dentro de aspas [" "] é necessariamente uma STRING, que é nada mais que um texto. */

/* ----=======---- ----=======---- ----=======---- ----=======---- */

/* Comentarios em JavaScript podem ser aplicado em duas formas. */

// Desta maneira com duas barras no começo da frase, onde toda linha é um comentario.
/* E esta onde o comentario acaba quando é fechado o asteristco com a barra. */

// DICA: Comandos para comentarios:

// [ Ctrl + / ] Isso forma um comentario em toda a linha mesmo se tiver coisas nesta linha o comentario vai aplicar em toda ela.
/* [ Shift + Alt + A ] é formado um comentario no exato local do cursor mesmo se for no meio da linha, não abrangendo a linha como um todo.  */

/* ----=======---- ----=======---- ----=======---- ----=======---- */

/* Variaveis e tipos de dados */

var meuNumero = 10;

console.log(meuNumero);

console.log(meuNumero + 5);
/* Resultado foi [15] pois foi somado o valor da variavel meuNumero (10) com o (5). */

console.log("10" + 5);
/* Neste caso o resultado foi [105] pelo motivo que o JavaScript interpretou o ("10") como um texto e uniu ele com o 5 não fazendo a soma. */

var booleano = true; // ou False.

console.log(typeof meuNumero);
console.log(typeof booleano);

/* [TYPEOFF] JavaScript vai retornar que tipo de dado da variavel ou do dado */

var meuObjeto = {}; /* Necessario abrir e fechar as [CHAVES] */
var meuArray = []; /* Necessario abrir e fechar os [COLCHETES] */
var meuNull = null;
var meuUndefined = undefined; /* Sem valor, não definido */

/* ----=======---- ----=======---- ----=======---- ----=======---- */

/* Nova maneira de declarar VARIAVEIS */

let x = 10; /* [LET] substitui o uso de [VAR]. */
const y = 5; /* [CONST] é uma nova forma onde o valor atribuido nela jamais podera mudar. */

/* Alguns operadores aritmeticos e booleanos(comparação) */

console.log(x + y); /* Adição/Concatenação:         +  */
console.log(x - y); /* Subtração:                   -  */
console.log(x * y); /* Multiplicação:               *  */
console.log(x / y); /* Divisão:                     /  */
console.log(x ** y); /* Exponenciação:              ** */
console.log(x % y); /* Resto de Divisão:            %  */

console.log(x == y); /* Igualdade:                  ==  */
console.log(x === y); /* Identico igual:            === */
console.log(x != y); /* Desigualdade/Diferente:     !=  */
console.log(x != y); /* Identico desigual:          !== */

console.log(x > y); /* Maior que:                   >   */
console.log(x >= y); /* Maior ou igual que:         >=  */
console.log(x < y); /* Menor que:                   <   */
console.log(x <= y); /* Menor ou igual que:         <=  */
