/* F016 > Funcoes mouse
//Mouse up
function apertouMouse(){
    console.log('Apertou botao do mouse');
}
//Mouse down
function soltouMouse(){
    console.log('Soltou o botao do mouse');
}
//Mouse over
function passouMouse(){
    console.log('Passou o mouse em cima do botao');
}
//Mouse out
function tirouMouse(){
    console.log('Tirou o mouse de cima do botao');
}
//Mouse move
function movendoMouse(){
    console.log('Passando o mouse sobre o botao');
}
//onclick
function onClick(){
    console.log('Voce clicou no botao');
}
//Mouse context menu
function botaoDireito(){
    console.log('Voce clicou com o botao direito do mouse');

    return false;
}
*/

/* F017 > Funcoes teclado
//event.keyCode > pega o codigo uni
//event.shiftKey > shift ativo, retorna true ou false
//event.ctrlKey > ctrl ativo, retorna true ou false
function tecladoApertado(event){
    console.log('Teclado apertado!' + event.keyCode); 

    if(event.keyCode == 13){
        alert('Gabizinho lindo');
    }
}

function soltouTeclado(event){
    console.log('Soltou o teclado'); 

}

function apertouTeclado(event){
    console.log('Apertou uma tecla'); 

}
*/

/* F018 > Eventos de pagina
function carregou(){
    alert('Pagina carregou');
}
*/

