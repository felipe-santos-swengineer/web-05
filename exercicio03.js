//function to arrow functions

//3.1
const arr = [1, 2, 3, 4, 5]
arr.map(function(item) {
    return item + 10;
});

const arr2 = arr.map(item => {
    return item + 10;
});

console.log(arr2);


//3.2
const usuario = { nome: 'Rodrigo', idade: 37 }
function mostraIdade(usuario) {
    return usuario.idade
}
mostraIdade(usuario);

const idade = (usuario) => {
    return usuario.idade;
}

console.log(idade(usuario));


//3.3
const nome = "Rodrigo"
const idade = 37;

function mostraUsuario(nome = 'Rodrigo', idade = 28) {
    return { nome, idade }
} 
mostraUsuario(nome, idade)
mostraUsuario(nome)

const seeUser = (nome = "Rodrigo", idade = 28) => {
    return {nome , idade};
}

console.log(seeUser(nome,idade));
console.log(seeUser(nome));


//3,4
const promise = function() {
    return new Promise(function(resolve, reject) {return resolve()})
}

const promise2 = (() => {return new Promise((resolve, reject) => {
    return resolve();
})});

