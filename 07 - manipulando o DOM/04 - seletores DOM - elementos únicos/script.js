//querySelectorAll

const listItems = document.querySelectorAll('.item');
console.log(listItems[1].innerText); // Acessa o segundo item da lista

listItems.style.color = 'red'; // Não funciona, pois listItems é uma NodeList

listItems.forEach((item) => {
    item.style.color = 'red'; // Funciona, altera a cor de cada item para vermelho
    
    if (index === 1) {
        item.remove(); // Remove o segundo item da lista
    };

    if (index === 0) {
        item.innerText = 'Primeiro Item Alterado'; // Altera o texto do primeiro item
    };
});

const listItems2 = document.getElementClassName('item'); // Retorna uma HTMLCollection
console.log(listItems2[2].innerText); // Exibe a HTMLCollection no console

listItems2.forEach((item) => {
    console.log(item.innerText); // Não funciona, HTMLCollection não tem forEach
});

const listItemsArray = Array.from(listItems2); // Converte HTMLCollection em Array
listItemsArray.forEach((item) => {
    console.log(item.innerText); // Agora funciona, pois é um array
});

const listItems3 = document.getElementsByTagName('item'); // Retorna uma HTMLCollection
console.log(listItems3[0].innerText); // Exibe o primeiro item da HTMLCollection    


