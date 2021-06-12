//desestruturação
const instituicao = {
    nome: 'UFC',
    endereco: {
        cidade: 'Russas',
        estado: 'CE',}
};

const{nome,endereco:{cidade,estado}} = instituicao;

console.log(nome);
console.log(cidade);
console.log(estado);