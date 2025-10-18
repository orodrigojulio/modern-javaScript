let x;
const arr = [3, 7, 13, 20, 81, 14, 55, 8];
console.log('array: ', arr);

arr.push(100);
console.log('".push(100)" adicionou o 100 ao array: ',arr);

arr.pop();
console.log('".pop()" retirou o último elemento: ',arr);

arr.unshift(38);
console.log('".unshift(38)" colocou o elemento 38 no index 0 no grupo: ', arr);

arr.shift();
console.log('"shift()" tirou o primeiro elemento (index 0) do array', arr);

arr.reverse();
console.log('".reverse()" inverteu a posição de todos os elementos: ',arr);


x = arr.includes(20);
console.log('incluindo o elemento 20: ', arr, x);

x = arr.indexOf(3);
console.log('qual posição está o elemento 3: ', x, arr);

x = arr.slice(3);
console.log('retirou os 3 primeiros elementos: ',x);

x = arr.slice(1, 4);
console.log('retirou o primeiro e o quarto elemento que havia no array: ', x);

x = arr.splice(3, 1);
console.log('splice: acredito que seja o elemento com o valor mais alto: ',x);

console.log('sem fazer o split: ',arr)
x = arr.splice(1, 4).toString().charAt(0);
console.log('após o split: ',x);

//console.log(x, typeof(x), arr);
