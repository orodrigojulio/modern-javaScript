function removeElement() {
    const botaoLimpar = document.querySelector("#botaoLimpar");
    botaoLimpar.remove();
}

function removerPrimeiroElemento() {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
}

function removeItem(itemNumero) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumero})`);

    ul.removeChild(li);
}

function removeItem2(itemNumero) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(li)[0];

    ul.removeChild(li);
}


function removeItem3(itemNumero) {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemNumero - 1].remove();

}

const removeItem4 = (itemNumero) => document.querySelectorAll('li')[itemNumero - 1].remove();

removeElement();
removerPrimeiroElemento();
removeItem(2);
removeItem2(1);