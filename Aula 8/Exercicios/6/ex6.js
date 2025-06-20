let random = Math.floor(Math.random() * 11);

let tentativa = 0, i;

while(i != 0){
    let num = prompt("Advinhe o numero: ");
if(num == random){
    alert("Parabéns! Você acertou.");
    i = 0;
    tentativa = 1;
} else if(num < random){
    tentativa++;
    alert("Muito baixo. Tente de novo!");
} else if(num > random){
    tentativa++;
    alert("Muito alto. Tente de novo!");
}
if(tentativa == 5){
    alert("Limite de tentativas excedidos!")
    i = 0;
} 
}



alert("Voce preciosou de: " + tentativa + " tentativas");
