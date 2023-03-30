const lista = [1, 2 ,3 ,4 ,5 ,6];
const novaLista = lista.map(function(item, index){ //mapeia o array
    return item + index;
});

console.log(novaLista);
const soma = lista.reduce(function(total, proximo){ //nessa funcao foi usado para somar todos itens do array
    return total + proximo;
});

console.log(soma);
const find = lista.find(function(item){ //Procura na lista
    return item === 6;
});