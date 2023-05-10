//GERANDO UM TOKEN COM Math.
let tokenGerado = Math.random().toString(16).substring(2);
//console.log(tokenGerado);

//DECLARANDO OBJETOS 
const usuario1 = {
    nomeUsuario : "denden",
    senhaUsuario : "12345",
    gravaDados : true,
    token : tokenGerado
}

tokenGerado = Math.random().toString(16).substring(2);
//console.log(tokenGerado);

//DECLARANDO OBJETOS 
const usuario2 = {
    nomeUsuario : "gege",
    senhaUsuario : "12345",
    gravaDados : true,
    token : tokenGerado
}

//CRIANDO NOVA PROPRIEDADE PARA O OBJETO
//let novoNomePropriedade = "tokenzinho";
//usuario1[novoNomePropriedade] = 12;
//console.log(usuario1.tokenzinho);

let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

console.log(listaDeUsuarios);

addEventListener("click", (evt) => {
 

    if(evt.target.id == "btnSubmit"){
        const inputUser = document.querySelector("#idUser");
        const inputPass = document.querySelector("#idPass");
        
        try{
            listaDeUsuarios.forEach((usuario) => {
    
                if(inputUser.value == usuario.nomeUsuario && inputPass.value == usuario.senhaUsuario){
                    throw "Validado!";            
                }
            });

            throw "Não Validado";

        }
        catch (msg) {
            
            const msgError = document.querySelector("#msgError");

            if(msg == "Validado!") {
                msgError.setAttribute("style", "color: #00ff00");
                msgError.innerHTML = "<span><strong>Login efetuado com Sucesso!</strong></span>"
            }
            else {
                msgError.setAttribute("style", "color: #ff0000");
                msgError.innerHTML = "<span><strong>Usuário ou Senha incorreto!</strong></span>"
            }
        }
    }
});