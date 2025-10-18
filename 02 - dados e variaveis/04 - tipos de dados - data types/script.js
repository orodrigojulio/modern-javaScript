//String 
const primeiroNome = "Ângela";

const output = primeiroNome;

console.log(output, typeof output);
console.log();

//Number

const idade = 3;
const temperatura = 25;
console.log(idade, typeof idade);

//boolean

const temFilho = true;

// null
const numeroApartamento = null;

const filho = temFilho;
console.log(filho, typeof filho)

//Symbol
const id = Symbol('id');
const saida = id;
console.log(saida, typeof saida);

//BigInt

const n = 11212999838389488756n;
const grande = n;

console.log(grande, typeof n)

//Tipos de referencia

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const tr = numeros;

console.log(tr, typeof tr);

const pessoa1 = {
    nome: "Angela Aguiar",
};
let pessoa = pessoa1;

console.log(pessoa, typeof pessoa)

function ola() {
    console.log("Olá! Seus puto!!!");
}

let funcao = ola;
console.log(ola, typeof ola);

// STACK E HEAP

