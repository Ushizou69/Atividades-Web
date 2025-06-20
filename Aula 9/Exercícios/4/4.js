let str, newStr;

function churrasquinhoParaSnake(str){
    newStr = str.replace("-","_");
    
}

str = prompt("Digite uma string no formato dashed-case");
churrasquinhoParaSnake(str);
alert(newStr);