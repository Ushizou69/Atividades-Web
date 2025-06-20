let random = Math.floor(Math.random() * 11);

let num;

while(num != random){
    num = prompt("Advinhe o numero: ");
if(num == random){
    alert("Parabéns! Você acertou.");
} else if(num < random){
    alert("Muito baixo. Tente de novo!");
} else if(num > random){
    alert("Muito alto. Tente de novo!");
}
}
