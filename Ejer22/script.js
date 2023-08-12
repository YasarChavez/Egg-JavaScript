// Escribir un programa de JavaScript que al clickear un botón muestre un mensaje a
// elección.

const btn = document.querySelector('#boton');

btn.addEventListener('click', () => {
  const mensaje = document.querySelector('.cuadromensaje');
  mensaje.style.color = 'green';
  // mensaje.classList.add('prueba');
  mensaje.innerHTML = 'Sos o te hacés?';
});