/*console.log(novaLista);
const soma = lista.reduce(function(total, proximo){ //nessa funcao foi usado para somar todos itens do array
    return total + proximo;
});
*/

function adicionar(...numeros){
    let total = numeros.reduce((total, proximo) => total + proximo); //forma reduzida usando funcoes anonimas

    console.log(total);
}

adicionar(1,2,3,4,5,6);
