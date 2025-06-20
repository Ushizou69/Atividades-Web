let palavra = prompt("Digite uma palavra");

let palavrainvertida = function(string){
    return string.split("").reverse().join("");
}

alert("Aqui esta a palavra invertida: " + palavrainvertida(palavra));

if(palavra == palavrainvertida(palavra)){
    alert("Eh um palindromo!");
} else{
    alert("Não eh um palindromo!");
}