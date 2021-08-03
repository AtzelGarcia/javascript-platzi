function calculoDescuento(precio, descuento) {
  const porcentajeDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeDescuento) / 100;
  return precioConDescuento;
}

function precioFinal() {
  const inputPrecio = document.getElementById("inputPrecio");
  const valorPrecio = inputPrecio.value;
  const inputDescuento = document.getElementById("inputDescuento");
  const valorDescuento = inputDescuento.value;
  const textoPrecio = document.getElementById("resultadoDescuento");
  let precioConDescuento;
  precioConDescuento = calculoDescuento(valorPrecio, valorDescuento);
  textoPrecio.innerText =
    "El precio final con el descuento aplicado es: " + precioConDescuento;
}
