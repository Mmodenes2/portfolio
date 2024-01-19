var cursor = document.getElementById('cursor'); 
var listaNavegacion = document.querySelectorAll('.barranavegacion__lista, .contact, .titulo__contenedor ');
var formulario = document.querySelector('.formulario__contenedor'); 
 
formulario.addEventListener('mouseover', function() {
  cursor.style.width = '100px'; 
  cursor.style.height = '100px';
});

formulario.addEventListener('mouseout', function() {
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
