let num;

function verificarPar(num){
    if(num % 2 == 0){
        return true;
    } else{
        return false;
    }
}

let num1 = prompt("Digite um numero e verifique se ele é par: ");
verificarPar(num1);
if(verificarPar(num1) == true){
    alert("É par!");
} else{
    alert("Não é par!");
}