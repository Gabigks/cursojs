function cadastroPessoa(info){

    let novosDados = {
        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: 1230974
    };

    return novosDados;
}

console.log(cadastroPessoa({nome: 'Gabriel', sobrenome: 'Kolling', anoInicio: 2045}));