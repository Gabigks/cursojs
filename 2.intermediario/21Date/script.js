//Pega a data do exato momento
//var data = new Date();
//data = new Date(Date.parse("March 10, 2018"));

//data.getHours();
//data.getMinutes();
//data.getSeconds();
//data.getDate(); > dia do mes
//data.getMonth(); > mes
//data.getDay(); > dia da semana
//data.getFullYear(); > ano

var dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

function showDate(){
    var get = document.getElementById("teste");
    var data = new Date();
    get.innerHTML = dias[data.getDay()] + " " + data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear();   
}