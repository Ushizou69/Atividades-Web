let inputC = document.getElementById("C");
let inputF = document.getElementById("F");
let calculoC = 0; 
let calculoF = 0;

inputC.addEventListener("blur", function(){
    inputF.value = calculoF;
})

inputF.addEventListener("blur", function(){
    inputC.value = calculoC;
})
   
inputF.addEventListener("focus", function(){
    calculoC = ((inputF.value - 32) * 5) / 9;
})

inputC.addEventListener("focus", function(){
    calculoF = ((inputC.value * 9) / 5) + 32;
})
