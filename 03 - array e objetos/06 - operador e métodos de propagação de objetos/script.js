let x;

const todo = new Object();

todo.id = 1;
todo.nome = 'José Inácio';
todo.completo = false;

x = todo;

const pessoa = {
    endereco: {
        rua: 'Dr. Barros Filho',
        numero: '1911'
    }
}

x = pessoa.endereco.rua

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { obj1, obj2 };
x = obj3;
console.log(x);

//diferente de

const obj4 = { ...obj1, ...obj2 };
x = obj4;
console.log(x);

const obj5 = Object.assign({}, obj1, obj2);
x = obj5;
console.log('Objeto 5: ',x);

//arrays de objetos

const todos = [
    {
        id: 1,
        nome: 'José Inácio'
        
    },
    {
        id: 2,
        nome: 'Inácio José'
        
    },
    {
        id: 3,
        nome: 'José Silva'
    }
];

x = todos[0].nome;

x = Object.keys(todo);


console.log(x);