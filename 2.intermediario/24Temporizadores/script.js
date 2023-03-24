function acao(){
    document.write("Executando...<br/>");
}


//Executa de tempo em tempo!
//passa dois parametros, a funcao que sera executada e o tempo em milissegundos
setInterval(acao, 1000);
//var timer = setInterval(acao,1000);
//clearInterval(timer); //Para a execucao do timer, pode ser interessante para usar em um butao ou algo do genero

//Executa uma vez
//passa dois parametros, a funcao que sera executada e o tempo em milissegundos
//setTimeout(acao, 3000);