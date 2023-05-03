/* <button id=meu-botao>CLICK</button> */

const botao = document.getElementById("meu-botao");

//Atrelando um evento ao ELEMENTO
// ESTRUTURA: nomevariavel.addEventListener("EVENTO", "FUNÇÃO DE CALL BACK");
botao.addEventListener("click", function(){

    //Função matemática Math
    //Math.random = retorna números aleatorios entre 0 e 1  EX: 0.1241256
    //Math.floor = função de arredondamento para baixo
    //Math.cell = função de arredondamento para cime
    //Math.round = função de arredondamento aleatório

    let r = 0;
    let g = 0;
    let b = 0;

    //Números aleatórios gerados
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);

    // this.setAttribute("style", "background-color:rgb("+ r + "," + g + "," + b + ");");
    this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);
});


//DESAFIO
//Recupere o elemento tit-sec e atrele a ele um evente de click.
//Quando clicado o elemento deve diminuir em 10px

const titsec = document.querySelector(".tit-sec");

titsec.addEventListener("click", () => {

    titsec.setAttribute("style", `font-size:10px;`);

});

