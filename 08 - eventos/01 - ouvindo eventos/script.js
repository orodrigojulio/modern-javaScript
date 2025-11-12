
const limpar = document.querySelector("#limpar");

function onClick() {
    alert("Clicou no botão!");
}

/*
// Adicionando o evento de clique ao botão

limpar.onclick = function () {
    alert("Clicou no botão limpar!");
}

limpar.onclick = function () {
console.log("Clicou no botão limpar!");
    
//addEventListener() 
limpar.addEventListener('click', alert('Limpar itens!!!'));    
*/

limpar.addEventListener('click', onClick);
 
// setTimeout(() => limpar.removeEventListener('click', onClick), 5000);


setTimeout(() => limpar.click(), 5000);