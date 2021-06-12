//rest

const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;


console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

function soma(...props){
    res = 0;
    for(var i = 0; i < props.length; i++){
        res += props[i];
    }
    return res;
}

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

//spread
const usuario1= {
    nome: 'Rodrigo',
    idade: 37,
    endereco: {
        cidade: 'Mossoró',
        uf: 'PB',
        pais: 'Brasil',
    } 
};

const usuario2 = {...usuario1, nome: "João"};
const usuario3 = {...usuario2, endereco:{...usuario2.endereco,cidade: 'Russas'}}

console.log(usuario2);
console.log(usuario3);