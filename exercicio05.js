const usuario = {
    nome: "Rodrigo",
    idade: 37,
};

function exibeInfo(usuario) {
    return`${usuario.nome} tem ${usuario.idade} anos.`;
}

console.log(exibeInfo(usuario));
