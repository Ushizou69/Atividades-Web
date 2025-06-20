let botao = document.querySelector("button");
let body = document.querySelector("body");

botao.addEventListener("click", alteracor);

function alteracor(){
    let cor = Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = "#" + cor;  
}