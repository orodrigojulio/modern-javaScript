let output;

const parent = document.querySelector('.parent');
output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[1].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = 'Texto alterado 1';
output = parent.childNodes[5].style.color = 'red';

output = parent.fistChild;
output = parent.lastChild;

parent.lastChild.textContent = 'Minha cahorra é muito chata';

//ParentNode
 
const child = document.querySelector('.child');

output = child.parentNode;  
output = child.parentElement;

child.parentNode.style.backgroundColor = '#c3c3c3c3';
child.parentElement.style.padding = '10px';

//siblings - irmãos
const segundoItem = document.querySelector('.child:nth-child(2)');

output = segundoItem.nextSibling;
output = segundoItem.previousSibling

console.log(output);

