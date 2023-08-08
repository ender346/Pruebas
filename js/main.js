const botonCambiarColor = document.getElementById('boton-cambiar-color');

botonCambiarColor.addEventListener('click', function() {
  document.body.classList.toggle('boton-clickeado');
});
