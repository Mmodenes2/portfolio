var cursor = document.getElementById('cursor'); 
var listaNavegacion = document.querySelectorAll('.barranavegacion__lista, .contact, .titulo__contenedor ');
var galeria = document.querySelector('.galeria'); 
 
galeria.addEventListener('mouseover', function() {
  cursor.style.width = '100px'; 
  cursor.style.height = '100px';
});

galeria.addEventListener('mouseout', function() {
  cursor.style.width = '30px';
  cursor.style.height = '30px';
});

listaNavegacion.forEach(function(item) { 
    item.addEventListener('mouseover', function() {
    cursor.style.filter = 'invert(1)';
     });
        
    item.addEventListener('mouseout', function() { 
    cursor.style.filter = 'invert(0.9)';
    });
            });
           
document.addEventListener('mousemove', function(e) {
     var x = e.clientX + window.pageXOffset;
     var y = e.clientY + window.pageYOffset;

     cursor.style.left = x + "px";
     cursor.style.top = y + "px";
     });


//Selecciona el elemento con la clase .galeria.
const slider = document.querySelector('.galeria');
//isDown: Si el botón del mouse está presionado.
let isDown = false;
//Determina las variables
let startX;
let scrollLeft;
// 'mousedown' Se activa cuando el botón del mouse se presiona .
slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
// El 'mouseleave' se activa cuando el mouse sale del área del contenedor .
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
//'mouseup' se activa cuando el botón del raton se libera.
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
//'mousemove': Se activa cuando el mouse se mueve dentro del contenedor con el botón está presionado.
//Si el botón está presionado 'isDown' es verdadero, calcula la nueva posición en función del movimiento del raton.
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

