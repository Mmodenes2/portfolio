var cursor = document.getElementById('cursor'); 
var principal__parrafo_primero = document.querySelector('.principal__titulo');
var listaNavegacion = document.querySelectorAll('.barranavegacion__lista, .contact, .titulo__contenedor'); 
var contenedor = document.querySelector('.principal__contenedor');       


principal__parrafo_primero.addEventListener('mouseover', function() { 
    cursor.style.width = '100px';
    cursor.style.height = '100px';
});
contenedor.addEventListener('mouseover', function() { 
    cursor.style.width = '100px';
    cursor.style.height = '100px';
});


principal__parrafo_primero.addEventListener('mouseout', function() {
    cursor.style.width = '30px';
    cursor.style.height = '30px';
});
contenedor.addEventListener('mouseout', function() {
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


//Animacion giraroria del circulo
//Declara la variable.
const str = "PORTFOLIO PORTFOLIO PORTFOLIO 24";
//Declara la variable seleccionando el ID "animacion__circulo".
const text = document.getElementById("animacion__circulo");
//Establece que cuando la ventana este cargada se ejecuta una funcion. La funcion es un bucle que itera sobre cada elemento de str e indica
//que en cada iteracion se creara un elemento span y el contenido será una nueva cadena.
window.onload = () => {
    for (let i = 0; i < str.length; i++) {
        let span = document.createElement("span");
        span.innerHTML = str[i];
        //Añade una clase a cada span
        span.classList.add("animacion__circulo"); 
        // Incrementa el ángulo de rotación en múltiplos de 11 grados para cada iteración.
        text.appendChild(span);
        span.style.transform = `rotate(${11 * i}deg)`;
    }
};
