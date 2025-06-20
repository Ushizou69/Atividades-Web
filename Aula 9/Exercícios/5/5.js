//1
function inverterArray(array) {
    array.reverse();
}
  
  let nums = [1, 2, 3, 4, 5];
  let nums1 = [1, 2, 3, 4, 5];
  inverterArray(nums1);
  alert("O array " + nums + " eh assim invertido: " + nums1);

//2
let a1 = [1,1,1,1];

function arrayIgual(value){
    return value.every(v => v === value[0]);
}

arrayIgual(a1);
alert("Este array: " + a1 + " é " + arrayIgual(a1));

//3
let array = [1,1,1,1];
function soma(array){
    let soma = 0;
    for(let i = 0; i < array.length; i++){
        soma += array[i];
    }

    return soma;
}
alert(soma(array));

//4
let array1 = [55,12,19,200,40,59,13,54];
function maior(array){
    return Math.max(...array);
}

alert(maior(array1));

