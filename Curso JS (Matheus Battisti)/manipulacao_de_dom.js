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
const elementoEmTela1 = document.querySelector("#meuInput");

const elementoPai = elementoEmTela1.parentNode; // Se precisar do elemento "pai" do elemento "pai" acrescentar mais um [.parentNode].

console.log(elementoPai);

/* ----=========---- ----=========---- ----=========---- ----=========---- */

// Manipulando a estrutura com DOM.
const novoElemento = document.createElement("div");
console.log(novoElemento);

novoElemento.textContent = "Minha nova div na página com JS.";
console.log(novoElemento);

document.body.appendChild(novoElemento); // Adiciona dentro do [body] no final.
document.body.insertBefore(novoElemento, elementoPai); // Adiciona depois na variavel especificada.
// document.body.removeChild(elementoPorClasse);

/* ----=========---- ----=========---- ----=========---- ----=========---- */

// Eventos - click(), scroll(), submit(), mouseover(), keydown().
// Click.
const botao = document.querySelector("button");

botao.addEventListener("click", () => {
  alert("Botão foi clicado!");
});

// Mouse.
const elementoDeFormulario = document.querySelector("#meuFormulario");

elementoDeFormulario.addEventListener("mouseover", () => {
  console.log("Mouse passou por este campo!");
});

// Teclado (Digitação).
const campoDeTeclado = document.querySelector("#meuInput");

campoDeTeclado.addEventListener("keydown", () => {
  console.log("Teclad neste formulario foram pressionadas.");
});

// Formulario.
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault;

  console.log("Form enviado!");
  // Previne que o padrão estabelecido aconteça, no caso do formulario de recarregar a pagina, porem em links ele iria previnir de direcionar o link quando clicado.
});

// Propagação de eventos.
document.querySelector("#elementoPai").addEventListener("Click", () => {
  console.log("Clique capturada no pai.");
});

document.querySelector("#elementoFilho").addEventListener("click", (e) => {
  e.stopPropagation();

  console.log("ELemento filho");
  // O stopPropagation() faz o elemento pai não ser acessado, ao contratio do exemplo acima onde se não fosse atribuido isto ele entraria no elemento pai, pegaria o elemento filho, e pegava o elemento pai também.
});

document.querySelector("#meuLink").addEventListener("click", (e) => {
  e.preventDefault();

  console.log("O evento de re-direcionar para o link foi parado.");
});
/* ----=========---- ----=========---- ----=========---- ----=========---- */
