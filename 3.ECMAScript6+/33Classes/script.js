class List{
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
};

class ListaTarefas extends List{
    constructor(){
        super();

        this.nome = 'Gabriel';
    }

    mostrarNome(){
        console.log(this.nome);
    }
};

const minhasTarefas = new ListaTarefas();

document.getElementById("novo").onclick = function(){
    minhasTarefas.add("Nova tarefa");
}

minhasTarefas.mostrarNome();