// 1° Criar  o balao
// 2° Estourar  o balao
// 3° Carregar o balao

var total = 0;

function criaBalao(){
    var balao = document.createElement("div");
    balao.setAttribute("class", "balao");

    var x = Math.floor(Math.random() * 600);
    var y = Math.floor(Math.random() * 400);

    balao.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
    balao.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(balao);

}

function estourar(objeto){
    document.body.removeChild(objeto);
    total++;

    var score = document.getElementById("total");
    score.innerHTML = "Baloes estourados: " + total;
}

function carregaJogo(){
    setInterval(criaBalao, 1000);
}