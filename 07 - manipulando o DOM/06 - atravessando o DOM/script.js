let saida;

//obter elementos filho

const parent = document.querySelector('.parent');

saida = parent.children; //HTMLCollection com os elementos filhos
saida = parent.children[0].innerText; //primeiro elemento filho

saida = parent.children[1].className; //classe do segundo elemento filho

saida = parent.children[1].nodeName; //NOME DO ELEMENTO (DIV)

parent.children[1].innerText = 'Alterado via DOM'; //alterando o texto do segundo filho
parent.children[2].style.backgroundColor = 'lightblue'; //alterando o estilo do terceiro filho

parent.firstElementChild.innerText = 'Primeiro Filho'; //acessando o primeiro filho diretamente
parent.lastElementChild.innerText = 'Último Filho'; //acessando o último filho diretamente

//obtendo elementos pais de um filho

const child = document.querySelector('.child');
saida = child; 

child.parentElement.style.border = '2px solid red'; //adicionando borda ao elemento pai
child.parentElement.style.padding = '10px'; //adicionando padding ao elemento pai

//obtendo elementos irmãos
const secondItem = document.querySelector('.child:nth-child(2)');
saida = secondItem;
saida = secondItem.previousElementSibling.innerText; //irmão anterior
secondItem.previousElementSibling.style.color = 'green'; //alterando estilo do irmão anterior
secondItem.nextElementSibling.style.color = 'blue'; //alterando estilo do irmão seguinte

console.log(saida);
