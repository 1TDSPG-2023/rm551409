const body = document.querySelector("body")
const botao = document.querySelector("#botao-cor");

botao.addEventListener("click", function(){
    let r = 0;
    let g = 0;
    let b = 0;

    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    
    body.setAttribute("style", `background-color:rgb(${r},${g},${b});`);
});

const trocar = document.querySelector("#trocar-img");
const voltar = document.querySelector("#voltar-img");
const lobo = document.querySelector("#lobo");

trocar.addEventListener("click", () => {
    lobo.setAttribute("src", "../img/lobo2.jpg");
});

voltar.addEventListener("click", () => {
    lobo.setAttribute("src", "../img/lobo1.jpg");
});

const texto = document.querySelector("#texto");
const mostrar = document.querySelector("#mostrar");
const esconder = document.querySelector("#esconder");

mostrar.addEventListener("click", () => {
    texto.hidden=false;
});

esconder.addEventListener("click", () => {
    texto.hidden=true;
});