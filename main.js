function tocaSomRisada(){
    document.querySelector("#som_tecla_risada").play();
}

const listasDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//enquanto
while(contador < listasDeTeclas.length) {
    listasDeTeclas[contador].onclick = tocaSomRisada
    contador = contador + 1;
    console.log(contador)
}

/*    
document.querySelector(".tecla_risada").onclick = tocaSomRisada;



function tocaSomAplausos(){
    document.querySelector("#som_tecla_aplausos").play();
}
document.querySelector(".tecla_aplausos").onclick = tocaSomAplausos;


function tocaSomVaia(){
    document.querySelector("#som_tecla_vaia").play();
}
document.querySelector(".tecla_vaia").onclick = tocaSomVaia;


function tocaSomErrado(){
    document.querySelector("#som_tecla_errado").play();
}
document.querySelector(".tecla_errado").onclick = tocaSomErrado;


function tocaSomGrilo(){
    document.querySelector("#som_tecla_grilo").play();
}
document.querySelector(".tecla_grilo").onclick = tocaSomGrilo;


function tocaSomTambores(){
    document.querySelector("#som_tecla_tambores").play();
}
document.querySelector(".tecla_tambores").onclick = tocaSomTambores;



function tocaSomDinheiro(){
    document.querySelector("#som_tecla_dinheiro").play();
}
document.querySelector(".tecla_dinheiro").onclick = tocaSomDinheiro;
*/