//comentario linha
/* comentario bloco*/

//Conceitos basicos
/*var nome = "Gabriel";

var idade = prompt("Qual sua idade");

document.write("<br></br>");
document.write("<h2>teste</h2>");
document.write("<img src='http://google.com/google.jpg' />");
*/

/* 12> Funções
//Funcao entrar
function entrar(){
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome: ');

    if(texto == '' || texto==null){
        alert('Digite seu nome novamente.');
    }else{
        area.innerHTML = 'Bem vindo ' + texto;
    }
}

function entrar2(nome){
    var area = document.getElementById('area2');
    var texto= prompt('Digite seu sobrenome: ');

    if(texto == '' || texto==null){
        alert('Digite seu sobrenome novamente.');
    }else{
        area.innerHTML = 'Bem vindo ' + nome + ' ' + texto;
    }
}
*/

/* 13/14 > Manipulando arrays
//lista.indexOf('Gabriel') >> Retorna a posicao de Gabriel na lista, caso nao exista retorna -1
//lista.join(',') >> Retorna todos os elementos da lista separados por virgula
//lista.pop() >> Exclui o ultimo elemento da lista
//lista.shift() >> Exclui o primeiro elemento da lista
//lista[0] = 'tesao' >> Altera o elemento da posicao 0 para 'tesao'
//lista.push('Marci') = adiciona 'Marci' na lista

function changeArray(){
    var array = document.getElementById('array');
    var lista = ['Gabriel', '+', 'Marcela','=', 'Amor'];
    
    array.innerHTML = lista.join(" ");
}
*/

/* 15 > Loops (while e for)*/

/* 16 > switch
document.write('</br>Escolha seu pedido: </br>');
document.write('</br>0 - Sorvete / 1 - Suco');
document.write('</br>2 - Pena de galinha / 3 - Pata de urubu</br></br>');


function pedir(){
    x = prompt('Digite o que voce deseja do menu: ');

    switch(x){
        case "0":
            alert('Voce pediu um sorvete!');
            break;
        case "1":
            alert('Voce pediu um suco!');
            break;
        case "2":
            alert('Voce pediu uma pena de galinha!');
            break;
        case "3":
            alert('Voce pediu uma pata de urubu!');
            break;

        default:
            alert("Nao tem isso aqui nao doidao!");
            break;  
    }
}
*/