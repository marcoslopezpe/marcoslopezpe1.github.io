function uno_a_tres() {
    // sea n100 un número del 1 al 100 y n3 el resultado de tu función
    let n100 = Math.floor(Math.random()*100+1);
  
    if(n100<=10) {
      n3 = 2; // canto 
    } else if (n100<=45) {
      n3 = 1;
    } else {
      n3 = 3;  
    }
    return n3;
    

}
var numero_aleatorio_moneda=Math.floor(uno_a_tres(n3));
var n3; 
var fuente2="img/monedasale"+numero_aleatorio_moneda+".png";
//console.log(numero_aleatorio_moneda);
document.querySelector('.img_moneda').setAttribute('src',fuente2);

function refrescarPagina(){
    location.reload();

}

// https://codepen.io/cdrs/pen/pGgmPw

/* lkshlksHGAA 

let numero_aleatorio_moneda=Math.floor(Math.random()*3)+1;

let fuente2="img/monedasale"+numero_aleatorio_moneda+".png";

// alert(numero_aleatorio_moneda);

document.querySelector('.img_moneda').setAttribute('src',fuente2);

function refrescarPagina(){
    location.reload();

}

*/
