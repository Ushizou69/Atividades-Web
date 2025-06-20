let body = document.querySelector('body');
let link = document.querySelector('a');

setInterval(function(){
    body.classList.toggle('azul');
    link.classList.toggle('paraLink');
}, 1000)