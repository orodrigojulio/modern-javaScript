//Formas de declarar uma variável
//var, let, const

let primeiroNome = 'Rodrigo';
let ultimoNome = 'Silva';

console.log(primeiroNome, ultimoNome);
let idade = 44;
console.log(idade);

//Nomeacao Convencionais
//Variáveis só podem ter letras, números, underscores e $$ dollar
//não pode começar com número

//re-assingning variables

idade  = 31;
console.log(idade);

let score;
score = 1;
console.log(score);

if(true){
    score = score + 1;
}

console.log(score)

const x = 100;
const arr = [1,2,3,4];

// arr = [1,2,3,4,5]; erro por ter os valores constante: 1,2,3,4

arr.push(5);
console.log(arr);

const person = {
    nome: 'Rodrigo', 
};
console.log(person)

person.nome = 'Angela';
console.log(person.nome);

person.email = 'rodrigo@gmail.com';
console.log(person.email);

console.log(person);

//declarando valores múltiplos

let a, b, c;

const d = 10, e = 20, f = 30;
console.log = (d);