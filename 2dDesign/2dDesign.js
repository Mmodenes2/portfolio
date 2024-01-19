
var cursor = document.getElementById('cursor'); 
var titulo3d = document.querySelector('.titulo__3d');
var listaNavegacion = document.querySelectorAll('.barranavegacion__lista, .contact, .titulo__contenedor ');
var kings = document.querySelector('.elementos__contenedor'); 
var key= document.querySelector('.keywords__filas');

        
titulo3d.addEventListener('mouseover', function() { 
    cursor.style.width = '100px';
    cursor.style.height = '100px';
});
            
kings.addEventListener('mouseover', function() {
  cursor.style.width = '100px'; 
  cursor.style.height = '100px';
});
key.addEventListener('mouseover', function() {
    cursor.style.width = '100px'; 
    cursor.style.height = '100px';
  });
  

titulo3d.addEventListener('mouseout', function() {
    cursor.style.width = '30px';
    cursor.style.height = '30px';
});

kings.addEventListener('mouseout', function() {
  cursor.style.width = '30px';
  cursor.style.height = '30px';
});
key.addEventListener('mouseout', function() {
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
    let tween = gsap.to(".marquesina__parte", {
    xPercent: -100,
    repeat: -1,
    yoyo: false,
    duration: 4,
    ease: "none" 
    });
          