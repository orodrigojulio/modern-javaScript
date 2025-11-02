console.log(document.getElementById("titulo-principal"));
console.log(document.getElementsById("titulo-principal").id);
console.log(document.getElementsById("titulo-principal").nomeClasse);
console.log(document.getElementsById("titulo-principal").getAttribute("nomeAtributo"));

//set attribute
document.getElementById("titulo-principal").title = "Título Principal da Página";
document.getElementById("titulo-principal").setAttribute("nomeAtributo", "valorAtributo");

const title = document.getElementById("titulo-principal");
console.log(title);;

//get/change conteúdo
console.log(title.textContent);
title.textContent = "Título Principal Alterado";
title.innerText = "Título Principal Alterado Novamente";
title.innerHTML = "Título <strong>Principal</strong> Alterado com HTML";

//estilizando elemento
title.style.color = "blue";
title.style.backgroundColor = "lightgray";
title.style.padding = "10px";
title.style.borderRadius = "5px";
title.style.textAlign = "center";

//document.querySelector() - retorna o primeiro elemento que corresponde ao seletor CSS fornecido

console.log(document.querySelector("h1"));
console.log(document.querySelector("#titulo-principal"));
console.log(document.querySelector(".titulo"));
console.log(document.querySelector("input[type='text']"));
console.log(document.querySelector("li:nth-child(2)").innerText);

const segundoItem = document.querySelector("li:nth-child(2)");
segundoItem.style.color = "red";
segundoItem.style.fontWeight = "bold";

//usar esses métodos em outros documentos HTML para praticar a manipulação do DOM
const list = document.querySelector("ul");
console.log(list);
const primeiroItem = document.querySelector("li:first-child");
primeiroItem.style.color = "green";
primeiroItem.style.fontSize = "18px";
list.style.listStyleType = "square";
list.style.padding = "0";
list.style.margin = "20px 0";