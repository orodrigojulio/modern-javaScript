const div = document.createElement('div');
div.className = 'meu-elemento';
div.id = 'meu-elemento';  
div.setAttribute('title', 'Meu título');

//div.innerText = 'Olá Mundo!';    

const text = document.createTextNode('Olá Mundo!');
div.appendChild(text); // Adiciona o texto dentro da div

//document.body.appendChild(div); // Adiciona a div ao body

document.querySelector('h1').appendChild(div); // Adiciona a div a uma lista não ordenada


console.log(div);

//criou o título, o texto e anexou ao body ou ao h1
//tem que ser mesmo o appendChild para anexar o nó criado ao elemento pai
