let filmes = [
    {titulo: "The Imitation Game", avaliacao: "5 estrelas", status: true},
    {titulo: "Hackers", avaliacao: "4 estrelas", status: false},
    {titulo: "The Social Network", avaliacao: "3 estrelas", status: false},
    {titulo: "Pirates of Sillicon Valley", avaliacao: "5 estrelas", status: true},
    {titulo: "Revolution OS", avaliacao: "4 estrelas", status: true}
];
let visto = "visto";
let vistoN = "não visto";

for(let i = 0; i < filmes.length; i++){
    if(filmes[i].status == true){
        console.log("-" + filmes[i].titulo + " - " + filmes[i].avaliacao + " - " + visto + ".");
    } else {
        console.log("-" + filmes[i].titulo + " - " + filmes[i].avaliacao + " - " + vistoN + ".");
    }
}