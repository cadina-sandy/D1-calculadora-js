// Valores iniciales del producto
const precioBase = 5990;
let cantidad = 0;

// Elementos que vamos a modificar en el HTML
const precioBaseSpan = document.querySelector(".precio-base");
const cantidadSpan = document.querySelector(".cantidad-producto");
const totalSpan = document.querySelector(".total-pagar");

// Botones de la tarjeta
const botonSumar = document.querySelector(".btn-sumar");
const botonRestar = document.querySelector(".btn-restar");

// Muestra los valores iniciales en pantalla
precioBaseSpan.innerHTML = precioBase;
cantidadSpan.innerHTML = cantidad;
totalSpan.innerHTML = precioBase * cantidad;

// Esta funcion calcula el total cada vez que cambia la cantidad
function actualizarTotal() {
  totalSpan.innerHTML = precioBase * cantidad;
}

// Evento onclick para sumar productos
botonSumar.onclick = function () {
  cantidad = cantidad + 1;
  cantidadSpan.innerHTML = cantidad;
  actualizarTotal();
};

// Evento onclick para restar productos
botonRestar.onclick = function () {
  if (cantidad > 0) {
    cantidad = cantidad - 1;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
  }
};
