const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');


button.addEventListener('click', (e) => {
    alert('Você clicou no botão!');
    div.style.backgroundColor = 'red';
    e.stopPropagation();
});

div.addEventListener('click', () => {
    alert('Você clicou na div!');
    div.style.backgroundColor = 'blue';
});

document.body.addEventListener('click', () => {
    alert('Você clicou no body!');
    div.style.backgroundColor = 'green';
});

