let x;

const pessoa = {
    nome: 'José Inácio',
    idade: '32',
    isAdmin: true,
    endereco: {
        rua: 'Rua Dos Bobos',
        numero: '0',
        complemento: 'Casa',
        bairro: 'João de Barro',
        cidade: 'Nova Iguaçu',
        estado: 'Rio de Janeiro'
    }
};
x = pessoa.nome;
console.log(x);
x = pessoa['idade'];
console.log(x);
x = pessoa.endereco.rua;
console.log(x);
delete pessoa.idade;
x = pessoa;
console.log(x);

pessoa.saudacao = function () {
    console.log(`Olá! Meu nome é ${this.nome}`);
};
pessoa.saudacao();
x = pessoa;
console.log(x);