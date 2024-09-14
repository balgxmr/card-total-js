// Inicialización de variables
const precio = 400000; // En este caso el precio será fijo, pero podría ser let o var en caso de que nuestro sitio lo requiera
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const precioTotalSpan = document.querySelector(".valor-total");
const btnAumentar = document.querySelector("#btnAumento");
const btnDecremento = document.querySelector("#btnDecremento");

let cantidad = 0;

// Muestra el precio del producto
precioSpan.innerHTML = precio;

// Funcion para actualizar el valor total mostrado
function actualizarTotal() {
  precioTotalSpan.innerHTML = cantidad * precio;
}

// Aumentar cantidad en evento click al botón y llamar a actualizarTotal()
btnAumentar.addEventListener("click", () => {
  cantidad += 1;
  cantidadSpan.innerHTML = cantidad;
  actualizarTotal();

  // Activamos el botón de decremento ya que la cantidad será > 0
  btnDecremento.disabled = false;
});

// Decrementar cantidad en evento click al botón y llamar a actualizarTotal()
btnDecremento.addEventListener("click", () => {
  // Verificamos que la cantidad sea mayor a 0
  if (cantidad > 0) {
    cantidad -= 1;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();

    // Cuando la cantidad llegue a 0, desactivar btnDecremento
    if (cantidad == 0) {
      btnDecremento.disabled = true;
    }
  }
});

// Desactivamos btnDecremento inicialmente ya que cantidad inicia en 0
if (cantidad == 0) {
  btnDecremento.disabled = true;
}
