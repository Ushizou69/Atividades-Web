let idade = prompt("Digite sua idade: ");

if(idade < 16){
    alert("Não pode entrar no evento.");
} else if((idade >= 16) && (idade < 18)){
    alert("Pode entrar no evento, porém não pode beber.");
} else if (idade >= 18){
    alert("Pode entrar no evento e beber.");
    alert("Se beber não dirija!");
}


