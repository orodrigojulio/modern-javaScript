const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemsFilter = document.getElementById('filter');
const items = itemList.querySelectorAll('li');

function addItem(e) {
    e.preventDefault();

    const newItem = itemInput.value;
    //inputs validos
    if (newItem === '') {
        alert('Por favor, insira um item na lista.');
        return;
    }

    //cria o elemento li
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    //adiciona o item na lista
    itemList.appendChild(li);

    checkUI();

    itemInput.value = '';
}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        if (confirm('Tem certeza que deseja remover este item?')) {
            e.target.parentElement.parentElement.remove();
            checkUI();
        }
    }
}

function clearItems() {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
    checkUI();
}

function checkUI() {
    const items = itemList.querySelectorAll('li');
    console.log(items)

    if (items.length === 0) {
        clearBtn.style.display = 'none';
        itemsFilter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        itemsFilter.style.display = 'block';
    }
    
}


itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearBtn.addEventListener('click', clearItems);
checkUI();