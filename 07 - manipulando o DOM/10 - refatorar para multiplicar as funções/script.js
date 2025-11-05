function criarNovoItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = criarBotao('remove-item btn-link text-red');

    li.appendChild(button);
    
    document.querySelector('.items').appendChild(li);
}

function criarBotao(classes) {
    const button = document.createElement('button');
    button.className = classes;
    
    const icon = criarIcone('fa fa-remove');
    button.appendChild(icon);

    return button;
}

function criarIcone(classes) { 
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

criarNovoItem('Novo item 1');
