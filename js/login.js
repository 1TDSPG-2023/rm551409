/*
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
*/

// //CRIANDO OBJETOS
// let listaDeUsuarios = [
//     {
//         nomeCompleto : "Denden da Silva",
//         nomeUsuario : "denden",
//         senhaUsuario : "123456"
//     },
//     {
//         nomeCompleto : "Gersu da Silva",
//         nomeUsuario : "gege",
//         senhaUsuario : "123456"
//     },
//     {
//         nomeCompleto : "José da Silva",
//         nomeUsuario : "jose",
//         senhaUsuario : "123456"
//     },
//     {
//         nomeCompleto : "Paulo das Couves",
//         nomeUsuario : "paula",
//         senhaUsuario : "123456"
//     },
//     {
//         nomeCompleto : "Mary Help",
//         nomeUsuario : "mary",
//         senhaUsuario : "123456"
//     },
//     {
//         nomeCompleto : "Pedro Silva",
//         nomeUsuario : "pedro",
//         senhaUsuario : "123456"
//     },
// ];

//GUARDAR A LISTA DE OBJETOS NO LOCAL-STORAGE
localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));

addEventListener("click", (evt) => {
 
    const inputUser = document.querySelector("#idUser");
    const inputPass = document.querySelector("#idPass");

    if(evt.target.id == "btnSubmit"){
        
        try{
            //RECUPERAR A LISTA DE USUARIOS DO LOCALSTORAGE
            let listaDeUsuarios = JSON.parse(localStorage.getItem("listaUser"));

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
                msgError.innerHTML = "<span><strong>Login efetuado com Sucesso!</strong></span>";

                //REDIRECT ESPERA 3 SEGUNDOS ANTES DE REDIRECIONAR
                setTimeout(function(){
                    window.location.href = "../pages/sucesso.html";
                }, 3000);
            }
            else {
                msgError.setAttribute("style", "color: #ff0000");
                msgError.innerHTML = "<span><strong>Usuário ou Senha incorreto!</strong></span>";
            }
        }
    }
    else if(evt.target.className == "fa fa-eye" || evt.target.className == "fa fa-eye-slash"){

        if(inputPass.getAttribute("type") == "password"){
            evt.target.setAttribute("class", "fa fa-eye-slash");
            inputPass.setAttribute("type", "text");
        }
        else{
            evt.target.setAttribute("class", "fa fa-eye");
            inputPass.setAttribute("type", "password");
        }

    }
});