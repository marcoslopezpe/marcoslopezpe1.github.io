let numero_aleatorio_dado=Math.floor(Math.random()*6)+1;


let fuente1="img/saledado"+numero_aleatorio_dado+".png";


// alert(numero_aleatorio_dado);


document.querySelector('.img_dado').setAttribute('src',fuente1);

function refrescarPagina(){
    location.reload();

}
