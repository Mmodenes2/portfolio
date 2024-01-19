
//Codigo que se aplica al cursor para que siga al raton y cambie de tamaño cuando pase por encima de ciertos elementos.
//Selecciona elementos del DOM y los guarda en variables.
var cursor = document.getElementById('cursor'); 
var h1 = document.querySelector('.h1');
var listaNavegacion = document.querySelectorAll('.barranavegacion__lista, .contact, .titulo__contenedor ');
var carta3d = document.querySelector('.carta__titulo__3d'); 
var cartamo = document.querySelector('.carta__titulo__mo');
var cartaweb = document.querySelector('.carta__titulo__web');
var animacion1 = document.querySelector('.carta__animacion__contenedor1');
var animacion2 = document.querySelector('.carta__animacion__contenedor2');
var animacion3 = document.querySelector('.carta__animacion__contenedor3');            
            
//Cambia el tamaño del cursor con 'mouseover',cuando el cursor esta encima de los elementos .
h1.addEventListener('mouseover', function() { 
    cursor.style.width = '100px';
    cursor.style.height = '100px';
});
            
carta3d.addEventListener('mouseover', function() {
    cursor.style.width = '100px'; 
    cursor.style.height = '100px';
});
cartamo.addEventListener('mouseover', function() {
    cursor.style.width = '100px'; 
    cursor.style.height = '100px';
});
cartaweb.addEventListener('mouseover', function() {
    cursor.style.width = '100px'; 
    cursor.style.height = '100px';
});
animacion1.addEventListener('mouseover',function(){
    cursor.style.width = '100px'; 
    cursor.style.height = '100px';
})
animacion2.addEventListener('mouseover',function(){
    cursor.style.width = '100px'; 
    cursor.style.height = '100px';
})
animacion3.addEventListener('mouseover',function(){
    cursor.style.width = '100px'; 
    cursor.style.height = '100px';
})


//cuando el raton sale de estos elementos vuelve a cambiar el tamaño del cursor a 30x30 píxeles.
h1.addEventListener('mouseout', function() {
    cursor.style.width = '30px';
    cursor.style.height = '30px';
});

carta3d.addEventListener('mouseout', function() {
    cursor.style.width = '30px';
    cursor.style.height = '30px';
});
cartamo.addEventListener('mouseout', function() {
    cursor.style.width = '30px';
    cursor.style.height = '30px';
});
cartaweb.addEventListener('mouseout', function() {
    cursor.style.width = '30px';
    cursor.style.height = '30px';
});
animacion1.addEventListener('mouseout', function() {
    cursor.style.width = '30px';
    cursor.style.height = '30px';
});
animacion2.addEventListener('mouseout', function() {
    cursor.style.width = '30px';
    cursor.style.height = '30px';
});
animacion3.addEventListener('mouseout', function() {
    cursor.style.width = '30px';
    cursor.style.height = '30px';
});

//forEach itera sobre cada elemento en listaNavegacion para invertir el del cursor cuando el raton entra (mouseover) o sale (mouseout).
// Como agrega eventos mouseover y mouseout a los elementos anteriores la inversion de color se aplica a todos los elementos y no solo a los
//incluidos en listaNavegacion.
listaNavegacion.forEach(function(item) { 
    item.addEventListener('mouseover', function() {
    cursor.style.filter = 'invert(1)';
    cursor.style.webkitFilter = 'invert(1)';
     });
        
    item.addEventListener('mouseout', function() { 
    cursor.style.filter = 'invert(0.9)';
    cursor.style.webkitFilter  = 'invert(0.9)';
    });
            });


//Con la funcion (e) actualiza la posición del cursor en respuesta al movimiento del ratón, 
 //haciendo que el cursor siga al ratón.   
document.addEventListener('mousemove', function(e) {
    var x = e.clientX + window.pageXOffset;
    var y = e.clientY + window.pageYOffset;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
    });


//He utilizado la biblioteca GSAP para animar la clase .marquee__part y los elementos que contiene.
           
let tween = gsap.to(".marquesina__parte", {
    xPercent: -100,
    repeat: -1,
    yoyo: false,
    duration: 4,
    ease: "none" 
    });


//Animacion segun el desplazamiento de la página:
//Selecciona los elementos  
const cards = document.querySelectorAll('.carta__animacion__contenedor1, .carta__animacion__contenedor2, .carta__animacion__contenedor3');
//Crea los valores iniciales y los guarda en variables
const initialScale = 1;
const initialRotation = 0;

let lastScrollPosition = 0;
//Crea un evento de escucha que ejecuta la función handleScroll cuando se realice un 'scroll', desplazamiento.
window.addEventListener('scroll', handleScroll);

function handleScroll() {
  //Posición actual de desplazamiento vertical.
const currentScrollPosition = window.scrollY;
  //Dirección del desplazamiento.
const scrollDirection = currentScrollPosition > lastScrollPosition ? 'down' : 'up';
  lastScrollPosition = currentScrollPosition;
  //Itera sobre las cartas y escala el tamaño dependiendo de la dirección del 'scroll'
  cards.forEach((card, index) => {
    const delay = index * 0.5;
    const scale = scrollDirection === 'down' ? 0.90 : initialScale; 
    card.style.transitionDelay = `${delay}s`;
    card.style.transform = `scale(${scale})`;
  });

  
}











