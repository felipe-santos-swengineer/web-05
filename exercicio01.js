class Usuario{
    constructor(email, senha) {
        this.email=email;
        this.senha=senha;
        this.admin=false;
    }

    isAdmin(){
        return this.admin;
    }
}

//admin herda caracteristicas de usuario
class Admin extends Usuario{
    constructor(){
        //super invoca o contrutor da classe pai
        super();
        this.setAsAdmin();
    }
    
    setAsAdmin(){
        this.admin=true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123')
const Adm1 = new Admin('email@teste.com', 'senha123')
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true