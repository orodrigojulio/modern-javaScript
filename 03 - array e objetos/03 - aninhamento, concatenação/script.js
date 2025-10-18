let x;

const frutas = ["banana", "goiaba", "jabuticaba", "melancia", "graviola"];
console.log('array: ', frutas)
const deVerao = ["uva", "manga", "maçã"];
frutas.push(deVerao);
console.log('array com o array de frutas de verão inseridos: ', frutas);

x = frutas[4];
console.log('elemento na posição 4, que na verdade é um array dentro do array: ', x);

x = frutas[2][1];
console.log('elemento na posição 2.1, que é o segundo elemento dentro do sub array: ', x);

const todasFrutas = [frutas, deVerao];
x = todasFrutas;
console.log('um array com dois sub arrays: ',x);

x = todasFrutas[1][0];
console.log('fruta do segundo array na posição 0: ',x);

x = frutas.concat(deVerao);
console.log('conectou todos os elementos dos dois arrays: ', x);


//Spread Operator

x = [...frutas, ...deVerao];
console.log('uma forma diferente de conectar os dois arrays: "[...frutas, ...verao]": ', x);

//arrays

const arr = [1, 2, [3, 4], 5, 6, [7, 8], 9];
x = arr.flat();
console.log('transformou todos os elementos do array, elementos e subarrays, em um array único: ',x);

//métodos estáticos no objeto array
x = Array.isArray(frutas);
console.log('consulta pra ver se eh array: ',x)
x = Array.from("1234567890");
console.log('"From", cria um array com números fornecidos sem precisar da declaração array: ', x);
x = Array.from("chocolate");
console.log('cria um array a partir de uma palavra fornecida: ',x);

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);
console.log('"Array of", cria uma um array através de dados informados: ', x);


//global e funcao escopo
//alert("caraio!");
