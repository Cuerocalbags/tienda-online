let carrito = [], total = 0;
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  document.getElementById('contador').innerText = carrito.length;
  actualizarCarrito();
}
function actualizarCarrito() {
  const lista = document.getElementById('lista-carrito');
  lista.innerHTML = '';
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.nombre} - $${item.precio.toLocaleString()}`;
    lista.appendChild(li);
  });
  document.getElementById('total').innerText = '$'+total.toLocaleString();
}
function enviarMensaje(event) {
  event.preventDefault();
  document.getElementById('gracias').style.display = 'block';
  event.target.reset();
}
