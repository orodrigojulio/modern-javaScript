const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run() {
    // Adicionando uma classe
    console.log(itemList.className);
    text.className = 'card escuro';

    //classList
    console.log(itemList.classList);

    itemList.classList.forEach((c) => console.log(c));

    text.classList.add('escuro');
    text.classList.remove('card');

    text.classList.toggle('escuro');

    text.classList.replace('card', 'dark');

    // mudando o estilo de um elemento
    itemList.style.lineHeight = '30px';

    items.forEach((item, index) => {
        item.style.color = 'red';

        if(index === 2) {
            item.style.backgroundColor = 'blue';
        }
    })

}

document.querySelector('button').onclick = run;
