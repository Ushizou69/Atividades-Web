function transformaremTexto(num){
    let string = "inserir";
    switch(num){
        case 1:
            string = "uma";
            return string;
        case 2:
            string = "duas";
            return string;
        case 3:
            string = "tres";
            return string;
        case 4:
            string = "quatro";
            return string;
        case 5:
            string = "cinco";
            return string;
        default:
            return num;
    }
}

//numeroEscolhido

let random = Math.floor(Math.random() * 11);

let tentativa = 0, i;
while(i != 0){
    let num = prompt("Advinhe o numero: ");
if(num == random){
    alert("Parabéns! Você acertou.");
    i = 0;
    tentativa++;
    break;
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

alert("Voce preciosou de " + transformaremTexto(tentativa) + " tentativa(s)");


