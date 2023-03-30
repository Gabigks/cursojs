/*function minhaLista(...nomes){
    console.log(nomes);
}
minhaLista("Mateus", "Joao", "Gabriel");

function minhaLista(...numeros){
    console.log(numeros)
}
minhaLista(1,2,3,4,5);
*/

function cadastraUsuario(usuarios, ...novosUsuarios){ //rest
    let totalUsuarios = [
        ...usuarios, //spread
        ...novosUsuarios //spread
    ];
    console.log(totalUsuarios);
}

let usuarios = ['Gabriel', 'Marcela'];
let novosUsuarios = cadastraUsuario(usuarios, 'Henrique', 'Joao');