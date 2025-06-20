let botao = document.querySelector("button");
let body = document.querySelector("body");
let cores = ["#FF0000","#00FF00","#0000FF","#FFFF00","#FFA500","#800080","#00FFFF","#FFC0CB","#A52A2A","#808080", "#000000","#FFFFFF"];

botao.addEventListener("click", alteracor);

function alteracor(){
    let cor = Math.floor(cores.length * Math.random());
    body.style.backgroundColor = cores[cor];  
}