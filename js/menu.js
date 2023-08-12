

let menu = document.querySelector('.menu-icon');
let boxMenu = document.querySelector('.perciana');
let anchoPantalla = document.documentElement.clientWidth;

function ejecutartareas(){
    if(anchoPantalla > 991){
    boxMenu.classList.remove("altoCaja");
  }
  //console.log(anchoPantalla);
  menu.addEventListener('click',function(e){
    e.preventDefault;
    
    //boxMenu.classList.toggle("altura-desk");
    boxMenu.classList.toggle("altoCaja");
  });
}



window.onload = ejecutartareas;