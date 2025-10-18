//Strings

let x;

const nome = 'Ângela';
const idade = 1;

x = 'Ólá! Meu nome é ' + nome + ' e minha idade é de ' + idade + ' ano.';

console.log(x);

//Templates

let z;
z = `Olá! Meu nome é ${nome} e eu tenho ${idade} de idade!`;
console.log(z);

//Propriedades e métodos da String

console.log('Propriedades e métodos da String');

const s = new String('Ólá mundo!');
x = typeof s;
console.log('\n',x);

x = s.length;
console.log('\ntamanho do objeto x, quantos elementos há nele: ',x);

x = [1];
console.log('\n', x);

x = s.__proto__;
x = nome.substring(0, 3);
console.log('\n', x);

let a = 'Cachorro';
x = a.slice(-3);
let eu = 'Rodrigo Júlio';
x = eu.replace('Júlio', ', Adriana e Ângela.')

console.log(x);


