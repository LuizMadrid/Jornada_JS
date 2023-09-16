// DOM = Document Object Model.
// Colocar um [defer] quando chamar o script no HTML.

// Metodo antigo (porem não está errado). ↓↓
const elementoPorId = document.getElementById("meuId");
console.log(elementoPorId);

// Metodo novo (mais utilizado hoje em dia). ↓↓
const elementoPorId2 = document.querySelector("#meuId");
console.log(elementoPorId2);

// Metodo antigo (porem não está errado). ↓↓
const elementoPorClasse = document.getElementsByClassName("minhaClasse");
console.log(elementoPorClasse);

// Metodo novo (mais utilizado hoje em dia). ↓↓
const elementoPorClasse2 = document.querySelector(".minhaClasse");
console.log(elementoPorClasse2);

/* ----=========---- ----=========---- ----=========---- ----=========---- */

// Manipulando conteudo de texto.
const elementoEmTela = document.querySelector("#meuId");

elementoEmTela.textContent = "Mudando o texto";

setTimeout(() => {
  elementoEmTela.textContent = "Pela 3º vez o texto foi mudado!";
}, 5000);

/* ----=========---- ----=========---- ----=========---- ----=========---- */

// Como trabalhar com atributos.
const link = document.querySelector("a");

link.setAttribute("href", "https://luizmadrid.github.io");

console.log(link.getAttribute("href"));

console.log(link.hasAttribute("target"));

link.removeAttribute("target");

/* ----=========---- ----=========---- ----=========---- ----=========---- */

// Manipulando classes, id's do CSS.
elementoEmTela.classList.add("novaClasse"); // Pra adicionar uma classe
elementoEmTela.classList.remove("novaClasse"); // Pra remover uma classe
elementoEmTela.classList.toggle("outraClasse"); // Se existir classe ele remove, se não existir adiciona

elementoEmTela.style.color = "cyan";
elementoEmTela.style.backgroundColor = "grey";

/* ----=========---- ----=========---- ----=========---- ----=========---- */

// Como navegar entre nós(pai, irmão e filho).
const elementoEmTela1 = document.querySelector("meuInput");

const elementoPai = elementoEmTela1.parentNode;

console.log(elementoPai);
