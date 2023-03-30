
class Pessoa{
    constructor(){
        this.nome = '',
        this.sobremome = ''
    }

    nomePessoa(primeiroNome){
        this.nome = primeiroNome;
        console.log('Meu nome e: ' + this.nome);
    }

    sobremomePessoa(segundoNome){
        this.sobremome = segundoNome;
        console.log('Meu sobrenome e: ' + this.sobremome);
    }

    nomeCompleto(){
        let nomeCompleto = this.nome + ' ' + this.sobremome;
        console.log('Meu nome completo eh: ' + nomeCompleto);
    }
};

let pessoa1 = new Pessoa;
pessoa1.nomePessoa("Gabriel");
pessoa1.sobremomePessoa("Kolling da Silva");
pessoa1.nomeCompleto();
