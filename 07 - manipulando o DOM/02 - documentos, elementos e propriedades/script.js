let output;

output = document.all;
output = document.all[7];// Pega o elemento na posição 7
output = document.all.length; // Pega o tamanho do array
output = document.documentElement; // Pega o elemento raiz do documento

output = document.head; // Pega o elemento head do documento
output = document.head.children; // Pega os filhos do elemento head

output = document.body; // Pega o elemento body do documento
output = document.body.children; // Pega os filhos do elemento body
output = document.body.children[0]; // Pega o primeiro filho do elemento body
output = document.body.children[0].children; // Pega os filhos do primeiro filho do elemento body
output = document.doctype
output = document.domain; // Pega o domínio do documento
output = document.URL; // Pega a URL do documento
output = document.characterSet; // Pega o charset do documento
output = document.contentType; // Pega o tipo de conteúdo do documento

output = document.forms; // Pega os formulários do documento    
output = document.forms[0]; // Pega o primeiro formulário do documento
output = document.forms[0].id; // Pega o id do primeiro formulário do documento
output = document.forms[0].method; // Pega o método do primeiro formulário do documento
output = document.forms[0].action; // Pega a ação do primeiro formulário do documento   

output = document.links; // Pega os links do documento
output = document.links[0]; // Pega o primeiro link do documento
output = document.links[0].id; // Pega o id do primeiro link do documento
output = document.links[0].className; // Pega a classe do primeiro link do documento
output = document.links[0].classList; // Pega a lista de classes do primeiro link do documento
output = document.links[0].classList[0]; // Pega a primeira classe do primeiro link do documento

output = document.images; // Pega as imagens do documento
output = document.images[0]; // Pega a primeira imagem do documento
output = document.images[0].src; // Pega o src da primeira imagem do documento
output = document.images[0].alt; // Pega o alt da primeira imagem do documento
output = document.images[0].title; // Pega o title da primeira imagem do documento
output = document.images[0].id; // Pega o id da primeira imagem do documento
output = document.images[0].className; // Pega a classe da primeira imagem do documento
output = document.images[0].classList; // Pega a lista de classes da primeira imagem do documento
output = document.images[0].classList[0]; // Pega a primeira classe da primeira imagem do documento

const forms = Array.from
document.forms.forEach((form) => {
    console.log(form);
    console.log(form.id);
    console.log(form.method);
    console.log(form.action);
});
console.log(output);