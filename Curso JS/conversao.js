/* Coerção (Conversão) de tipos */

/* Explicita - Manual */

let numero = 10;

console.log(numero, typeof numero);

let numeroEmFormatoDeString = String(numero);
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

console.log(parseInt("12.5"));
console.log(parseFloat("12.5"));
console.log(Number("12.5"));

/* Implicita - automatica */

console.log(Number.parseInt(10 + "1"));
/* **CUIDADO** nesta de automatica pois ela concatena em vez de somar se tiver
    um numero e uma string */
