const usuarios = [
    { nome: 'Rafael', idade: 37, empresa: 'Google' },
    { nome: 'Pedro', idade: 35, empresa: 'Google' },
    { nome: 'Junior', idade: 23, empresa: 'Facebook' }];


//map    
const idades = usuarios.map(function(item,index){
    return usuarios[index].idade;
});

console.log(idades);

//filter
const filtro = usuarios.filter(function(item){
    return item.empresa == 'Google' && item.idade==35;
})

console.log(filtro);

//find
const encontrar = usuarios.find(function(item){
    //return item.empresa == "Google";
    return item.empresa == "Microsoft";
});

console.log(encontrar);


