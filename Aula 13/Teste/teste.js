let botao = document.querySelector("Button");
let paragrafo = document.querySelector("p");
let imagem = document.querySelector("img");
botao.addEventListener("click", function(){
    paragrafo.textContent = "O botão foi clicado."
    imagem.src = "https://ik.imagekit.io/x2dirkim6/images/avatars/characters/character_avatar_aaO-UJmp3.webp?tr=w-384";
})

botao.addEventListener("mouseout", function(){
    paragrafo.textContent = "O botão ainda não foi clicado.";
    imagem.src = "https://ik.imagekit.io/x2dirkim6/images/avatars/characters/character_avatar_WERTPIRgM.webp?tr=w-384";
})