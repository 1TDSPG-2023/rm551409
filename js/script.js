/* <button id=meu-botao>CLICK</button> 

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
*/

/*
//ARRAYS E SEUS METODOS
let frutas = ["banana", "maçã", "pêra", "uva", "melancia", "ameixa", "morango", "goiaba"];
console.log(frutas);
console.log(`Fruta : ${frutas[0]}`);
//DESCOBRINDO O TAMANHO DO ARRAY ATRAVES DA PROPRIEDADE lenght
console.log(`Tamanho do Array : ${frutas.length}`);

//ADICIONANDO UM ITEM AO FINAL DO ARRAY COM UM MÉTODO push(itenNome);
frutas.push("fruta-conde");
console.table(frutas);

//ADICIONANDO UM ITEM NO INICIO DO ARRAY COM UM MÉTODO unshift(itenNome);
frutas.unshift("jabuticaba");
console.log(frutas);

//REMOVENDO UM ITEM NO FINAL DO ARRAY COM UM MÉTODO pop();
frutas.pop();
console.log(frutas);

//REMOVENDO UM ITEM DO COMEÇO DO ARRAY COM UM MÉTODO shift();
frutas.shift();
console.log(frutas);

//LOCALIZANDO UM ITEM COM O METODO indexOf(itenNome);
//OBS: O indexOf(itenNome); VAI RETORNAR O INDICE ONDE SE ENCONTRA O ITEM BUSCADO
//let indice = frutas.indexOf("morango");
//console.log(indice);
//console.log(frutas[indice]);

//REMOVENDO UM INDICE UMA DETERMINADA QUANTIDADE DE VEZES UTILIZANDO O METODO splice
//splice(indice do item, quantidade de vezes a ser removido);
//OBS: PARA OBTER O INDICE UTILIZE O METODO indexOf(itenNome);
let indice = frutas.indexOf("ameixa");
console.log(indice);
console.log(`Fruta que estava no indice antes da remoção : ${frutas[indice]}`);
//APLICANDO O splice E USANDO O INDICE OBTIDO COM O indexOf(itenNome);
frutas.splice(indice, 1);
console.log(`Fruta que ficou no indice depois da remoção : ${frutas[indice]}`);

//PERCORRER O ARRAY UTILIZANDO O forEach
frutas.forEach( (fruta) => {
    console.log(`Olha ela : ${fruta}`);
} ); // <-- ARROW FUNCTION OU FUNÇÃO ANONIMA / FUNÇÃO DE CALLBACK () => {}
*/