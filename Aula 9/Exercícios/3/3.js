let num, fat = 1, i = 1;

function fatorial(num){
    while(i <= num){
        fat *= i;
        i++;
    }

    alert("O fatorial do numero " + num + " é: " + fat);
}

num = prompt("Digite um numero e veja seu fatorial");
fatorial(num);