let cima = document.getElementById("cima");
let baixo = document.getElementById("baixo");
let p = document.querySelector("p");
let x = 1;

cima.addEventListener("click", function(){
    if(x > 1){
    x--;
    atualizaTexto(x);
}
})

baixo.addEventListener("click", function(){
    if(x < 5){
    x++;
    atualizaTexto(x);
}
}) 

function atualizaTexto(x){
    switch(x){
        case 1:
            p.textContent = "1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam delectus necessitatibus, exercitationem voluptatum voluptate quos impedit eligendi odio earum dolor velit minus reprehenderit fugiat natus error magnam animi? Nihil, tenetur. Repellendus sit exercitationem, ipsam at dicta eaque impedit suscipit pariatur vitae expedita? Perferendis fuga, similique fugiat libero eius fugit iusto consequuntur officiis obcaecati quia sunt quidem dicta quis maiores natus.";
        break;

        case 2:
            p.textContent = "2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, maiores ipsam? Quidem dignissimos ducimus, explicabo ab nam illo inventore aliquam beatae nesciunt omnis at commodi molestiae. Nisi pariatur quidem odit! Fugiat dolorum corporis voluptate reprehenderit quas laborum ex, qui modi illo iure, dolores impedit consequuntur eos et laudantium mollitia nesciunt. Itaque aperiam ab labore inventore repudiandae deserunt perferendis ratione ut.";
        break;
        
        case 3:
            p.textContent = "3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti deserunt fuga, sit quis cum impedit enim perspiciatis, quod nisi odio maiores dolores ipsa numquam aliquam dolorum tenetur, iure voluptatem? Numquam deserunt perferendis architecto? Earum cum hic, nisi reprehenderit rem veniam quis numquam libero, quae dolor qui consequuntur, ratione eveniet fuga illo sed aperiam voluptas alias molestiae magni neque eos.";
        break;

        case 4:
            p.textContent = "4. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae magnam rem quas repudiandae accusantium a, odio aliquam ut officiis est earum tempore. Officiis, dolore sed saepe deleniti labore voluptate maiores.Provident maiores sit rerum nostrum officia commodi modi accusamus eum, voluptates perspiciatis libero at numquam ullam quia, quisquam nobis exercitationem hic officiis eaque sunt. Dolor explicabo officia soluta magni numquam?";
        break;

        case 5:
            p.textContent = "5. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id fugiat commodi doloribus. Quasi modi esse alias voluptates consequatur voluptas ut rerum, totam temporibus unde illum accusantium facilis, qui velit doloribus! Cupiditate accusantium numquam voluptas eligendi unde corporis, ullam ut sed quibusdam est alias recusandae ea ratione culpa dolor molestiae facere doloremque in. Voluptatibus doloribus velit rerum aliquid et consequuntur corrupti?";
        break;
}
}

   
