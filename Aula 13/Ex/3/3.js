let botao = document.querySelector("button");
let body = document.querySelector("body");
let paragrafo = document.querySelector("p");

botao.addEventListener("click", function(){;
    body.style.backgroundColor = "#000000";
    paragrafo.style.color = "#FFFFFF";
})

botao.addEventListener("mouseout", function(){
    body.style.backgroundColor = "#FFFFFF";
    paragrafo.style.color = "#000000";
})