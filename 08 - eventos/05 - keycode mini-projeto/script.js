//método 1
window.addEventListener('keydown', (e) => {
    const insert = document.getElementById('insert');

    insert.innerHTML = `Tecla pressionada: <strong>${e.key}</strong> <br>
    Código da tecla: <strong>${e.keyCode}</strong> <br>
    Código do caractere: <strong>${e.which}</strong> <br>`;           
});  

//MÉTODO 2

function showKeyCode(e) {
    const insert = document.getElementById('insert');
    
    insert.innerHTML = `Tecla pressionada: <strong>${e.key}<strong> <br>
    Código da tecla: <strong>${e.keyCode}</strong> <br>
    Código do caractere: <strong>${e.which}</strong> <br>`;


    const keyCodes = {
        'é.key': e.key === ? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code,
    };

    for (let key in keyCodes) {
        const div = document.createElement('div');
        div.className = 'key';
        const small = document.createElement('small');

        const keyText = document.createTextNode(keyCodes[key]);

        small.appendChild(keyText);
        div.appendChild(valueText);
        div.appendChild(small);

        insert.appendChild(div);
    }
}

window.addEventListener('keydown', showKeyCode);