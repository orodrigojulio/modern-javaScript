//inserir adjacenElement
function insertElement() {
    const filter = document.querySelector('.filter');

    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';

    filter.insertAdjacentElement('beforebegin', h1);
}

//inserir adjacenText
function insertText() {
    const item = document.querySelector('li:first-child');

    item.insertAdjacentText('afterend', 'insertAdjacentElement');
    
}

//inserir adjacenHTML
function insertHTML() { 
    const cleaBtn = document.querySelector('#clear');

    cleaBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
}

//insert before
function insertBeforeItem() { 
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = 'insertBefore';

    const thirdItem = document.querySelector('li:nth-child(3)');
    ul.insertBefore(li, thirdItem);
}


insertElement();
insertText();
insertHTML();
insertBeforeItem();