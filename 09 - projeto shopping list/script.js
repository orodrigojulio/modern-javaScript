const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

function addItem(e) {
    e.preventDefault();
    
    //inputs validos
    if (itemInput === '') {
        alert('Por favor, insira um item na lista.');
        return;
    }
    
    
    //cria o elemento li
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    
    const button = createButton('remove-item btn-link text-red');
}

itemForm.addEventListener('submit', addItem);
